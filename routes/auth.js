// Auth Routes
const express = require('express');
// Required Controller
const authController = require('../controllers/authController');
// Required Middleware
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Auth end-points
router.post('/register', authController.register);
router.post('/login', authController.login);

// Adding a protected route for changing password
router.post('/change-password', authenticateToken, authController.changePassword);

// Forget Password (To be implemented)
// Google Auth (To be implemented)

module.exports = router;
