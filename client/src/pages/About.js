import Carousel from '../components/Carousel';
import LeafletMap from '../components/LeafletMap';
import './About.css';

const About = () => {
  return (
    <div className="about_page">
      <div className="carousel">
        <Carousel />
        <div className="text_on_carousel">
          <h1>ABOUT US</h1>
          <h2>→</h2>
        </div>
      </div>
      <div className="about_text">
        <p>
          Welcome to Food Factory, where culinary magic happens! At Food
          Factory, we are passionate about crafting unforgettable dining
          experiences that tantalize your taste buds and leave you craving for
          more. Our talented team of chefs works tirelessly to transform fresh,
          locally-sourced ingredients into mouthwatering masterpieces that
          showcase the rich flavors and vibrant colors of the culinary world.
          Step into our cozy and welcoming ambiance, where the aroma of sizzling
          spices fills the air, and the sound of sizzling pans creates a
          symphony of flavors. Whether you're joining us for a quick lunch
          break, a romantic dinner, or a celebration with friends and family, we
          have the perfect dish to satisfy your cravings. Indulge in our diverse
          menu, meticulously curated to cater to every palate. From savoring the
          classic comfort of our hearty burgers and sizzling steaks to exploring
          the exotic flavors of our Asian-inspired delicacies or savoring the
          freshness of our vibrant salads and seafood, every dish is a
          masterpiece in itself. We take pride in our commitment to quality and
          excellence. That's why we partner with local farmers and suppliers who
          share our passion for fresh and sustainable ingredients. By supporting
          local communities and embracing seasonal produce, we ensure that every
          bite you take at Food Factory is bursting with flavor and goodness.
          Bon appétit!
        </p>
      </div>
      <div className="map_split">
        <div className="map">
          <LeafletMap latitude={43.471877} longitude={17.333671} />
        </div>
        <div className="map_split_text">
          <h3>Opened every day from 16:00 - 00:00</h3>
          <h3>Delivery every day from 17:00 - 23:00</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
