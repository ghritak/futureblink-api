const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Authentication token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    console.log(decodedToken);
    req.user_id = decodedToken.id;
    next();
  });
};

module.exports = { authenticateToken };
