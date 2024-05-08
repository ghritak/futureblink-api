const User = require('../../model/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(404)
        .json({ error: 'User not found with the given email.' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(400).json({ error: 'Invalid password.' });

    const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    return res.status(200).json({
      message: 'Succesfully logged in.',
      token: authToken,
      data: userData,
    });
  } catch (err) {
    console.log(err);
    if (err.name === 'ValidationError') {
      const errorMessage = err.message.split(':').pop().trim();
      return res.status(400).json({ error: errorMessage });
    } else {
      console.log(err);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }
};

module.exports = { login };
