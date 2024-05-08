const users = require('../../model/users');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await users.findOne({ email: email });
    if (user)
      return res
        .status(409)
        .json({ message: 'User with this email already exist.' });

    const salt = await bcrypt.genSalt(10);
    let hashedPaaword = await bcrypt.hash(password, salt);

    const newUser = await users.create({
      name: name,
      email: email,
      password: hashedPaaword,
    });

    return res.status(201).json({ message: 'Succesfully signed up.' });
  } catch {
    (err) => {
      console.log(err);
      return res.status(500).json({ error: 'Internal server error.' });
    };
  }
};

module.exports = { signup };
