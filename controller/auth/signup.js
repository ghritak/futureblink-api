const User = require('../../model/users');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user)
      return res
        .status(409)
        .json({ error: 'User with this email already exist.' });

    const salt = await bcrypt.genSalt(10);
    let hashedPaaword = await bcrypt.hash(password, salt);

    await User.create({
      name: name,
      email: email,
      password: hashedPaaword,
    });

    return res.status(201).json({ message: 'Succesfully signed up.' });
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

module.exports = { signup };
