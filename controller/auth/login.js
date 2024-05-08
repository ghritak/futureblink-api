const users = require('../../model/users');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email: email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(400).json({ error: 'Invalid password.' });
  return res.status(200).json({ message: 'Succesfully logged in.' });
};

module.exports = { login };
