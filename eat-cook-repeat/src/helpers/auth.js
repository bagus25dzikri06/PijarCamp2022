const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Helpers = {
  hashPassword: (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },
  comparePassword: (hashPassword, password) => {
    return bcrypt.compareSync(password, hashPassword);
  },
  isValidEmail: (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }, 
  generateToken: (email, password, level) => {
    const token = jwt.sign({
       eMail: email,
       passWord: password,
       level: level
       //isActive: is_active
    },
        `${process.env.JWT_SECRET}`, { expiresIn: '30m' }
    );
    return token;
  },
  generateEmailToken: async (email) => {
    const token = jwt.sign({
       eMail: email
    },
        `${process.env.JWT_SECRET}`, { expiresIn: '20m' }
    );
    return token;
  },
  generateRefreshToken: (email, password, level) => {
    const token = jwt.sign({
       eMail: email,
       passWord: password,
       level: level
       //isActive: is_active
    },
        `${process.env.REFRESH_TOKEN_SECRET}`, { expiresIn: '2d' }
    );
    return token;
  },
};

module.exports = {
    Helpers
}