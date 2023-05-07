const mongoose = require('mongoose');

const schema = mongoose.Schema({ username: String, password: String });

const UserModel = mongoose.model('user', schema);

module.exports = UserModel;
