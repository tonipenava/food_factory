import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function RegisterPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register', { name, email, password })
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="register_container">
      <h2>Register new account </h2>

      <form className="register_form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Name"
          className="input"
          required
        ></input>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="Email"
          className="input"
          required
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          className="input"
          required
        ></input>
        <input type="submit" className="submit-btn"></input>
        <p>
          You already have an account?
          <br />
          You can{' '}
          <Link className="link_to_register" to="/login">
            Log in{' '}
          </Link>
          here.
        </p>
      </form>
    </div>
  );
}
