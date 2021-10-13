const jwt = require('jsonwebtoken');

module.exports = function HasToken(req, res, next) {
  const token = req.cookies?.['token'];
  if (!token) return res.status(401).json({error: 'Access Denied'});

  try {
    jwt.verify(token, process.env.JWT_SECURITY_KEY, (error, decoded) => {
      if (error) {
        throw error;
      } else {
        req.uuid = decoded.uuid;
        next();
      }
    });
  } catch (e) {
    console.error(e.message);
    res.status(400).json({error: 'Invalid Token'});
  }
};