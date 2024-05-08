const validatePassword = (value) => {
  if (!value || value.trim() === '') {
    throw new Error('Password cannot be blank');
  }
  return true;
};

module.exports = { validatePassword };
