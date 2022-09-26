const mongoose = require('mongoose');

// registered users profile information
const profileSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  bio: { type: String, default: 'Lorem ispum dolor sit amet, consectetur' },
  followers: [{ username: { type: String } }],
  following: [{ username: { type: String } }],
  image: { type: String, required: false, default: 'default.png' },
});
const profile = new mongoose.model('profile', profileSchema);
module.exports = profile;
