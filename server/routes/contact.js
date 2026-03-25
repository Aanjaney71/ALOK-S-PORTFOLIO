const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    // Log submission to console
    console.log('\n📩 New Contact Submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject || 'N/A'}`);
    console.log(`Message: ${message}`);
    console.log('---');

    // Save to MongoDB if connected
    if (process.env.MONGODB_URI && process.env.MONGODB_URI !== 'your_mongodb_uri_here') {
      const contact = new Contact({ name, email, subject, message });
      await contact.save();
      console.log('✅ Saved to MongoDB');
    }

    res.status(200).json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you within 24 hours. 🚀"
    });
  } catch (error) {
    console.error('Contact route error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// GET /api/contact - fetch all messages (admin only in real app)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
