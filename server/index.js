require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json({ limit: '10kb' }));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRoutes);

// Health check — also reports DB status
app.get('/api/health', (req, res) =>
  res.json({
    status: 'ok',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  })
);

// 404 fallback
app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found.' }));

// ─── Start server immediately (don't wait for DB) ─────────────────────────────
app.listen(PORT, () =>
  console.log(`🚀  Server running at http://localhost:${PORT}`)
);

// ─── MongoDB Connection (with retry) ─────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async (attempt = 1) => {
  if (!MONGO_URI) {
    console.error('❌  MONGO_URI is not set in server/.env');
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // 10s timeout
      socketTimeoutMS: 45000,
    });
    console.log('✅  MongoDB connected successfully');
  } catch (err) {
    console.error(`❌  MongoDB connection failed (attempt ${attempt}): ${err.message}`);

    if (err.message.includes('ENOTFOUND') || err.message.includes('querySrv')) {
      console.error('');
      console.error('   ⚠️  DNS/Network issue detected. Please check:');
      console.error('   1. Your internet connection');
      console.error('   2. MongoDB Atlas → Network Access → Add your current IP (or use 0.0.0.0/0 for dev)');
      console.error('      https://cloud.mongodb.com/ → Network Access → + ADD IP ADDRESS');
      console.error('');
    }

    if (attempt < 5) {
      const delay = attempt * 3000; // 3s, 6s, 9s, 12s
      console.log(`   ⏳  Retrying in ${delay / 1000}s...`);
      setTimeout(() => connectDB(attempt + 1), delay);
    } else {
      console.error('   ❌  Max retries reached. Server will run without DB (form submissions will fail).');
    }
  }
};

connectDB();
