import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarPage from './components/NavbarPage';
import About from './pages/About';

import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    console.log(isLoggedIn);
  };
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Reset username
    setUserName('');
    // Update the isLoggedIn state to false
    setIsLoggedIn(false);
  };
  console.log(isLoggedIn);
  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarPage
          isLoggedIn={isLoggedIn}
          userName={userName}
          onLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/menu" element={<MenuPage />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="/book-table" element={<BookingPage />} />
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
