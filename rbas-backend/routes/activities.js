const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity'); // Replace with your Activity model

// Route to fetch recent activities
router.get('/activities', async (req, res) => {
    try {
        // Fetch the most recent 10 activities, sorted by date in descending order
        const activities = await Activity.find().sort({ date: -1 }).limit(10);

        res.status(200).json(activities);
    } catch (error) {
        console.error('Error fetching activities:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
