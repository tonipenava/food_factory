import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const NavbarPage = ({ isLoggedIn, userName, onLogout }) => {
  console.log(isLoggedIn);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Initialize the state
  return (
    <div className="navbar_container">
      <div className="logo"></div>
      <div
        className="menu_icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>
      <div className={`nav_links ${isMobileMenuOpen ? 'active' : ''}`}>
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
            Log in
          </Link>
          <Link className="link_to_login register" to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default NavbarPage;
