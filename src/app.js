const express = require('express');
const app = express();
const router = require('./router/auth');
// const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./db/config');

const PORT = process.env.PORT || 8000;

app.use(cookieParser());
app.use(express.json());
app.use(router);
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     methods: 'GET,POST,PUT,DELETE',
//     credentials: true,
//   })
// );

app.listen(PORT, (error) => {
  if (error) console.log(`Server error: ${error} at port ${PORT}`);
  else console.log(`Server is running on port ${PORT}`);
});
