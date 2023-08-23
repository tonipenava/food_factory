import './BookingPage.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [people, setPeople] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/submit-booking', {
        name,
        email,
        phone,
        date,
        time,
        people,
      })
      .then((result) => {
        console.log(result);
        alert(
          'You have succesfully booked table. We will send you booking confirmation as soon as possible. Thank you !'
        );
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="booking_container">
      <div className="booking_left">
        <h1 className="booking_title">Book Your Table</h1>
      </div>
      <div className="booking_right">
        <form className="booking_form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="date"
            name="date"
            id="date"
            placeholder="Enter date"
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="time"
            name="time"
            id="time"
            placeholder="Time"
            onChange={(e) => setTime(e.target.value)}
          />

          <input
            type="number"
            name="people"
            id="people"
            placeholder="Number of people"
            onChange={(e) => setPeople(e.target.value)}
          />

          <button type="submit" className="booking_btn">
            Book me table
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
