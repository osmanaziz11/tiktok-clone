const mongoose = require('mongoose');

// registered users profile information
const profileSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  followers: {
    count: { type: Number, default: 0 },
    users: [{ username: { type: String, required: true, unique: true } }],
  },
  following: {
    count: { type: Number, default: 0 },
    users: [{ username: { type: String, required: true, unique: true } }],
  },
  about: { type: String, default: 'Lorem ispum dolor sit amet, consectetur' },
});
const profile = new mongoose.model('usersProfile', profileSchema);
module.exports = profile;
