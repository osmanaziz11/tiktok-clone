const mongoose = require('mongoose');

// All the registered users in the application
const usersSchema = new mongoose.Schema({
  Credentials: {
    FirstName: { type: String, required: true },
    LastName: { type: String, reuqired: true },
    Email: { type: String, required: true },
    Username: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
  },
  Profile: {
    bio: { type: String, default: 'Lorem ispum dolor sit amet, consectetur' },
    followers: [{ username: { type: String } }],
    following: [{ username: { type: String } }],
    image: { type: String, required: false, default: 'default.png' },
  },
});
const users = new mongoose.model('users', usersSchema);
module.exports = users;
