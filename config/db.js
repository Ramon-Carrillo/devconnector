require('dotenv').config();
const mongoose = require('mongoose');
const db = process.env.MY_MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('connected to db');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
