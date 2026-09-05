const express = require('express');
const router = express.Router();

// Import user controller functions
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  patchUser,
  deleteUser
} = require('../controllers/userController');

// Routes for base path '/'
router.get('/', getAllUsers);
router.post('/', createUser);

// Routes for resource by ID '/:id'
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

module.exports = router;