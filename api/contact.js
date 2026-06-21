import mongoose from 'mongoose';

// ─── MongoDB connection with caching ─────────────────────────────────────────
// Vercel serverless functions can reuse warm containers, so we cache the
// connection to avoid creating a new one on every request.
let cachedConnection = null;

async function connectDB() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return; // already connected
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not set.');
  }
  cachedConnection = await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  });
}

// ─── Mongoose model ───────────────────────────────────────────────────────────
// The mongoose.models guard prevents "Cannot overwrite model" errors on warm starts.
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    ipAddress: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// ─── Serverless handler ───────────────────────────────────────────────────────
export default async function handler(req, res) {
  // CORS headers (needed if frontend and API are on different origins)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();

    // ── POST /api/contact — save a new submission ──────────────────────────
    if (req.method === 'POST') {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'All fields (name, email, message) are required.',
        });
      }

      const ipAddress =
        req.headers['x-forwarded-for']?.split(',')[0].trim() ||
        req.socket?.remoteAddress ||
        null;

      const contact = await Contact.create({ name, email, message, ipAddress });

      return res.status(201).json({
        success: true,
        message: 'Message received! I will get back to you soon.',
        data: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
          createdAt: contact.createdAt,
        },
      });
    }

    // ── GET /api/contact — retrieve all submissions ────────────────────────
    if (req.method === 'GET') {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: contacts.length,
        data: contacts,
      });
    }

    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  } catch (error) {
    console.error('Contact API error:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join('. ') });
    }

    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
}
