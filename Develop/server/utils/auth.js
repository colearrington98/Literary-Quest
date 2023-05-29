const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function (context) {
    const { req } = context;
    let token = req.headers.authorization || '';

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trim();
    }

    if (!token) {
      throw new Error('You have no token!');
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.log('Invalid token:', err);
      throw new Error('Invalid token!');
    }
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  // Additional utility function to check if a user is authenticated
  verifyToken: function (token) {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (err) {
      console.log('Invalid token:', err);
      return null;
    }
  },
};
