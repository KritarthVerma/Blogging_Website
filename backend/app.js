const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/index');

const app = express();

// 1. Global Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Body parser
app.use(express.urlencoded({ extended: true }));

// 2. Mount API Routes
app.use('/api/v1', apiRouter);

// 3. Handle Unhandled Routes (404)
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Cannot find ${req.originalUrl} on this server!`,
  });
});

// 4. Global Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;