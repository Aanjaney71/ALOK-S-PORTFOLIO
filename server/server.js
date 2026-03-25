require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Aanjaney Portfolio API is running 🚀',
    timestamp: new Date().toISOString()
  });
});

// Root
app.get('/', (req, res) => {
  res.json({ message: 'Aanjaney Uprit Portfolio API v1.0.0' });
});

// Connect to MongoDB (optional – works without it too)
const connectDB = async () => {
  if (process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('<username>')) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ MongoDB Connected');
    } catch (err) {
      console.warn('⚠️  MongoDB not connected. Contact form will log to console only.', err.message);
    }
  } else {
    console.log('ℹ️  No MONGODB_URI set. Running without DB (logs only mode).');
  }
};

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API Health: http://localhost:${PORT}/api/health\n`);
  });
});
