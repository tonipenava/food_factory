const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CustomerModel = require('./models/Customer');
const BookingModel = require('./models/Booking');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/customers');

app.post('/login', (req, res) => {
  const { name, email, password } = req.body;
  CustomerModel.findOne({ email: email }).then((customer) => {
    if (customer) {
      if (customer.password === password) {
        res.json({ message: 'Success', userName: customer.name });
      } else {
        res.json('The password is inccorect!');
      }
    } else {
      res.json('customer not found!');
    }
  });
});
app.post('/register', (req, res) => {
  CustomerModel.create(req.body)
    .then((customers) => res.json(customers))
    .catch((err) => res.json(err));
});
app.post('/submit-booking', (req, res) => {
  BookingModel.create(req.body) // Use the Booking model to create a new booking
    .then((booking) => res.json(booking))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
