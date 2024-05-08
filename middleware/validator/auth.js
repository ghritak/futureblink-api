const validator = require('validator');

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!validator.isEmail(email))
    return res.status(400).json({ error: 'Invalid email' });

  if (validator.isEmpty(password))
    return res.status(400).json({ error: 'Password cannot be blank' });

  next();
};

const validateSignup = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!validator.isEmail(email))
    return res.status(400).json({ error: 'Invalid email' });

  if (validator.isEmpty(password))
    return res.status(400).json({ error: 'Password cannot be blank' });

  if (validator.isEmpty(name))
    return res.status(400).json({ error: 'Please provide a valid name' });

  next();
};

module.exports = { validateLogin, validateSignup };
