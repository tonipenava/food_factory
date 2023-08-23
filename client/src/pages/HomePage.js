import { Link } from 'react-router-dom';
import './HomePage.css';
import '../components/NavbarPage';

const HomePage = () => {
  return (
    <div className="home_page">
      <div className="home_content">
        <h1 className="home_text">
          Made by Food Factory. <br />
          Enjoyed by everyone.
        </h1>

        <Link to="book-table" className="book_table_btn">
          Book your table
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
