const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// ─── POST /api/contact — save submission to MongoDB ──────────────────────────
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, message) are required.',
      });
    }

    // Capture IP
    const ipAddress =
      req.headers['x-forwarded-for']?.split(',')[0].trim() ||
      req.socket.remoteAddress ||
      null;

    // Save to MongoDB
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
  } catch (error) {
    console.error('Contact form error:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join('. ') });
    }

    return res.status(500).json({
      success: false,
      message: 'Something went wrong on our end. Please try again later.',
    });
  }
});

// ─── GET /api/contact — retrieve all submissions ──────────────────────────────
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error('Fetch contacts error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch contacts.' });
  }
});

module.exports = router;
