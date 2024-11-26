const Role = require('../models/Role');
const Activity = require('../models/Activity');

exports.getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addRole = async (req, res) => {
    const { name, permissions } = req.body;

    try {
        const role = new Role({ name, permissions });
        await role.save();
        await Activity.create({
            action: 'Added New Role',
            name: name, // Replace with dynamic data
        });
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRole = async (req, res) => {
    try {
        const roles = await Role.findById(req.params.id);
        await Role.findByIdAndDelete(req.params.id);
        await Activity.create({
            action: 'Deleted Role',
            name: roles.name, // Replace with dynamic data
        });
        res.json({ message: 'Role deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
