const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Activity = require('../models/Activity');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addUser = async (req, res) => {
    const { name, email, password, role, status } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role, status });
        await user.save();
        await Activity.create({
            action: 'Added New User',
            name: name, // Replace with dynamic data
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        await User.findByIdAndDelete(req.params.id);
        await Activity.create({
            action: 'Deleted User',
            name: users.name, // Replace with dynamic data
        });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
