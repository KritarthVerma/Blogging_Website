const express = require('express');
const router = express.Router();

const {
  register,
  login,
  logout,
  getMe,
  updatePassword,
  forgotPassword,
  resetPassword,
  refreshToken,
} = require('../controllers/authController');

const { protect } = require('../middleware/authMiddleware');

// Public Routes (No tokens required)
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:token', resetPassword);

// Token-Refresh Route (Uses Refresh Token, not Access Token)
router.post('/refresh-token', refreshToken);

router.use(protect); // All routes below this line require authentication

// Protected Routes (Requires valid Access Token via `protect`)
router.get('/me', getMe);
router.post('/logout', logout);
router.patch('/update-password', updatePassword);

module.exports = router;