const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: config.env === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(config.port, () => {
  console.log(`Server running in ${config.env} mode on port ${config.port}`);
});

module.exports = app;
