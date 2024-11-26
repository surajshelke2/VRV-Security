const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    action: { type: String, required: true }, // e.g., Added New User, Updated Role, etc.
    //entity: { type: String, required: true }, // e.g., User, Role
    name: { type: String, required: true }, // e.g., Alice Johnson, Admin
    date: { type: Date, default: Date.now }, // Timestamp of the activity
});

module.exports = mongoose.model('Activity', activitySchema);
