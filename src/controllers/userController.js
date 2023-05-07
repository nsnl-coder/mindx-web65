const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res, next) => {
  const user = await UserModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!user) {
    res.status(404).json({
      status: 'fail',
      message: 'Can not find any user with provided email and password',
    });
    return;
  }

  const token = jwt.sign(
    { username: req.body.username },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    },
  );

  res.status(200).json({
    status: 'success',
    data: {
      token,
    },
  });
};

module.exports = {
  loginUser,
};
