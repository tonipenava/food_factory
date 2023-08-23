import { useState } from 'react';
import './Carousel.css'; // Import the CSS file for styling

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pictures = [
    require('../assets/galerija/g1.jpg'),
    require('../assets/galerija/g2.jpg'),
    require('../assets/galerija/g3.jpg'),
    require('../assets/galerija/g4.jpg'),
    require('../assets/galerija/g5.jpg'),
    require('../assets/galerija/g6.jpg'),
    require('../assets/galerija/g7.jpg'),
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="carousel">
      <button className="prevButton" onClick={handlePrev}>
        &lt;
      </button>
      <img
        className="img_carousel"
        src={pictures[currentSlide]}
        alt={`Slide ${currentSlide}`}
      />
      <button className="nextButton" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
