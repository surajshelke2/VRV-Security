const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Replace with your User model
const Role = require('../models/Role'); // Replace with your Role model


// Route to get counts
router.get('/counts', async (req, res) => {
    try {
        // Query the database for counts
        const totalUsers = await User.countDocuments();
        const activeUsers = await User.countDocuments({ status: 'Active' });
        const inactiveUsers = await User.countDocuments({ status: 'Inactive' });
        const totalRoles = await Role.countDocuments();

        // Send the counts as a response
        res.status(200).json({
            totalUsers,
            activeUsers,
            inactiveUsers,
            totalRoles,
        });
    } catch (error) {
        console.error('Error fetching counts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
