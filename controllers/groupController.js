//ENV
require('dotenv').config();

//Required packages
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


//Required models
const {User,Group,GroupMember} = require('../models');


//Get group information
exports.getGroupInfo = async (req,res) => {

    try{
        //Get the user id from token
        const userId = req.user.id;

        // Find all groups where the user is a member
        const groups = await Group.findAll({
            include: [{
                model: GroupMember,
                where: { userId: userId },
                attributes: []
            }],
            attributes: ['id', 'name', [sequelize.fn('COUNT', sequelize.col('GroupMembers.groupId')), 'numberOfMembers']],
            group: ['Group.id'],
            raw: true
        });

         // If no groups found, return a message
         if (!groups.length) {
            return res.status(404).json({ message: 'No groups found for this user.' });
        }

        //Return JSON
        res.json(groups);
    }catch (error)
    {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while fetching groups information' });
    }

};