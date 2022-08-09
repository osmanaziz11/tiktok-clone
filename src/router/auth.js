const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const tiktok_users = require('../db/models/users');
const tiktok_users_profile = require('../db/models/profile');

async function isValid(val) {
  const result = await tiktok_users.findOne({ Username: val });
  if (result != null) {
    return false;
  } else {
    return true;
  }
}

async function securePassword(password) {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
}
async function comparePassword(password, hashPassword) {
  return await bcrypt.compare(password, hashPassword);
}

// check if username already exists
router.post('/check-username', async (req, res) => {
  if (!(await isValid(req.body.username))) {
    res.status(200).send({ message: 'Username already exists', status: 1 });
  } else {
    res.status(404).send({ message: 'Username available', status: 0 });
  }
});

// To create new account
router.post('/create-account', async (req, res) => {
  req.body.Password = await securePassword(req.body.Password);
  try {
    const usersColletion = new tiktok_users(req.body);
    const userProfile = new tiktok_users_profile(req.body);
    const insertRecord = await usersColletion.save();
    const insertProfile = await userProfile.save();
    res
      .status(201)
      .send({ message: 'Insert record successfully.', record: insertRecord });
  } catch (error) {
    res.status(403).send({ message: error.message, record: undefined });
  }
});

// To login into app
router.post('/login', async (req, res) => {
  try {
    const result = await tiktok_users.find({ Username: req.body.Username });
    if (result.length > 0) {
      if (await comparePassword(req.body.Password, result[0].Password)) {
        const token = jwt.sign({ user: result }, process.env.JWT_APP_SECRET);
        res.status(200).send({ message: 'Login successful', token, status: 1 });
      } else {
        res.status(200).send({ message: 'Invalid Password', status: 0 });
      }
    } else {
      res.status(200).send({ message: 'Invalid Credentials', status: -1 });
    }
  } catch (error) {
    res.status(403).send({ message: error.message, record: undefined });
  }
});

// fetch profile info followers following description
router.get('/:username', async (req, res) => {
  const userID = req.params.username;
  try {
    const result = await tiktok_users_profile.find({ Username: userID });
    res.status(200).send({ message: 'Profile Retreived', record: result });
  } catch (error) {
    res.status(403).send({ message: error.message, record: undefined });
  }
});

// update profile info followers status following
router.post('/update-profile/:username', async (req, res) => {
  const userID = req.params.username;
  try {
    const userProfile = await tiktok_users_profile.find({ Username: userID });
    const { _id } = userProfile[0];
    const result = await tiktok_users_profile.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send({
      message: 'Update user profile successfully',
      record: result,
    });
  } catch (error) {
    res.status(400).send({
      message: 'Error updating user profile',
      record: undefined,
      error: error,
    });
  }
});

// search users
router.get('/users/:key', async function (req, res) {
  const key = req.params.key;
  console.log(key);
  try {
    const result = await tiktok_users.find({
      Username: { $regex: '^' + key, $options: 'i' },
    });
    res.status(200).send({
      message: 'User search successfully',
      record: result,
    });
  } catch (error) {
    res
      .status(400)
      .send({ message: 'Error searching users', record: undefined });
  }
});
module.exports = router;
