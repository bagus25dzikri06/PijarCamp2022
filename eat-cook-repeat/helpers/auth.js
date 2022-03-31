const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Helpers = {
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  },
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }, 
  generateToken(id) {
    const token = jwt.sign({
       userID: id
    },
        `${process.env.SECRET}`, { expiresIn: '15m' }
    );
    return token;
  }
};

module.exports = {
    Helpers
}