const express = require('express');
const router = express.Router();

const tiktok_users = require('../db/models/users');

async function isValid(val) {
  const result = await tiktok_users.findOne({ Username: val });
  if (result != null) {
    return false;
  } else {
    return true;
  }
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
  try {
    const usersColletion = new tiktok_users(req.body);
    const insertRecord = await usersColletion.save();
    res
      .status(201)
      .send({ message: 'Insert record successfully.', record: insertRecord });
  } catch (error) {
    res.status(403).send({ message: error.message, record: undefined });
  }
});

// To login into account
router.post('/login', async (req, res) => {
  try {
    const result = await tiktok_users.find({ username: req.body.username });
    result.length != 0
      ? res.status(201).send({ message: 'Result found', record: result })
      : res
          .status(404)
          .send({ message: 'Result Not Found', record: undefined });
  } catch (error) {
    res.status(403).send({ message: error.message, record: undefined });
  }
});

module.exports = router;
