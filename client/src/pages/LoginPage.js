import { useEffect, useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', {
        email,
        password,
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (data !== null) {
      if (data.data.message === 'Success') {
        handleLogin(data.data.userName);
        navigate('/');
      }
    }
  }, [data]);

  return (
    <div className="login_container">
      <h2>Log in to your account </h2>

      <form className="login_form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="E-mail"
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
          Dont have an account?
          <br />
          You can{' '}
          <Link className="link_to_register" to="/register">
            Register{' '}
          </Link>
          here.
        </p>
      </form>
    </div>
  );
}
