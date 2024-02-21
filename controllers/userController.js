// controllers/userController.js
const { User } = require('../models');

exports.getUserInfo = async (req, res) => {
  try {
    //get user id from token
    const userId = req.user.id;

    //Build user info, without pass
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Get User Info Error:', error);
    res.status(500).json({ message: 'An error occurred while fetching user information' });
  }
};
