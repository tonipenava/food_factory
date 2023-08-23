import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarPage = ({ isLoggedIn, userName, onLogout }) => {
  console.log(isLoggedIn);
  return (
    <div className="navbar_container">
      <div className="logo"></div>
      <div className="nav_links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About us</Link>
      </div>
      {isLoggedIn ? (
        <div className="user_info">
          <p className="userName">Welcome, {userName}!</p>
          <button className="logout_button" onClick={onLogout}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <Link className="link_to_login" to="/login">
            Login
          </Link>
          <Link className="link_to_login" to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default NavbarPage;
