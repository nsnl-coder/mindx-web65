const dotenv = require('dotenv');
dotenv.config();
//
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const router = require('./routers');
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(8080, () => {
  console.log('App listening on port 8080');
});

connectDB();
