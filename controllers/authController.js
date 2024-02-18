//ENV
require('dotenv').config();

//Required  packages
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Required models
const { User } = require('../models');

// Register logic
exports.register = async (req, res) => {
  try {
    // Get info from request
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Request must include email, password, name' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 8);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Generate JWT token for the new user
    const token = jwt.sign(
      { id: newUser.id }, 
        process.env.JWT_SECRET,
      { expiresIn: '24h' } 
    );

    // User object to return, excluding the password
    const userToReturn = { ...newUser.toJSON(), password: undefined };

    // Return the user info and JWT token
    res.status(201).json({ user: userToReturn, token });
  } catch (error) {
    res.status(400).send(error);
  }
};



//LogIn Logic
exports.login = async (req, res) => {
  try {
    // Check if the request body is empty ||  missing fields
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Request must include email and password' });
    }

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    
    // Return not found
    if (!user) {
      return res.status(404).json({ error: 'No account associated with this email address' });
    }
    
    // Check incomming passw 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Password is incorrect' });
    }
    
    // If email and password create the JWT token (De moment, doar user id -> pot adauga nume si alte detalii)
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );
    //return 
    res.json({ message: 'Login successful', token });
   
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while trying to log in' });
  }
};


// Change Password Logic (trebuie expandata, mai multe check uri)
exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword || !userId) {
      return res.status(400).json({ error: 'Request must not be emmpty'});
    }

    // Find the user by ID
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 8);

    // Update user's password
    await user.update({ password: hashedNewPassword });

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};


//Next Forget Passw (?? Mail localhost)
//Google auth ??

//TEST PENTRU MARCI //
