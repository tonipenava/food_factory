const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  time: String,
  people: Number,
});

const BookingModel = mongoose.model('register', BookingSchema);

module.exports = BookingModel;
