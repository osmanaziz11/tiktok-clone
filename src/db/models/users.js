const mongoose = require('mongoose');

// registered users
const usersSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, reuqired: true },
  Email: { type: String, required: true },
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Image: { type: String, required: false, default: '12/10/1990' },
});
const users = new mongoose.model('usersRecord', usersSchema);
module.exports = users;
