const isLoggedIn = (req, res, next) => {
  if (req.body.Username === 'Osman' && req.body.Password === '12345') {
    console.log(`User already logged in`);
    res.status(200).send({ message: 'Already logged in' });
  } else {
    console.log(`User have to logged in`);
    next();
  }
};
module.exports = isLoggedIn;
