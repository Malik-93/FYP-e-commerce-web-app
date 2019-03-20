const JWT = require('jsonwebtoken');
const {User} = require('../models/user');
const { JWT_SECRET } = require('../configurations');

signToken = user => {
  return JWT.sign({
    iss: 'Clothing',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, JWT_SECRET);
}

module.exports = {
  signUp: async (req, res, next) => {
    const { email, password } = req.value.body;

    // Check if there is a user with the same email
    const foundUser = await User.findOne({ email });
    if (foundUser) { 
      return res.status(403).json({ error: 'Email is already in use'});
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Generate the token
    const token = signToken(newUser);

    // Respond with token
    res.status(200).json({success: true, message: 'successfully Sign Up', data: token });
  },

  signIn: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    console.log(token)
    // res.redirect('/cart');
    res.status(200).json({success: true, message: 'successfully Sign Up', data: token });
  },

  secret: async (req, res, next) => {
    console.log('I managed to get here!');
    res.json({ secret: "resource" });
  }
}