const mongoose = require('mongoose');

const connectDB = () => {
  if (process.env.CONNECTION_STRING) {
    mongoose
      .connect(process.env.CONNECTION_STRING)
      .then(() => {
        console.log('Mongodb Database Connected');
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log('Can not find connection string');
  }
};

module.exports = connectDB;
