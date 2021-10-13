const jwt = require('jsonwebtoken');

function createToken(res, uuid) {
  const token = jwt.sign({ uuid }, process.env.JWT_SECURITY_KEY, { expiresIn: '6h' });

  const options = {
    httpOnly: false,
    secure: false,
    maxAge: 1000 * 60 * 240 // 6 h
  };

  res.cookie('token', token, options);
}

module.exports = createToken;