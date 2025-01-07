import React from "react";
import NavBar from "./NavBar";
import homeBackground from "../Assets/home-banner-background.png";
import homeImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      
        <div className="hero-section-container">
          <div className="home-background-banner">
            <img src={homeBackground} alt="" />
          </div>

        <div className="hero-section">
          <div className="hero-section-content">
            <h1>Your Favourite Food Delivered Hot & Fresh</h1>
            <p>
              Healthy switcher chefs do all the prep work, like peeding,
              chopping & marinating, so you can cook a fresh food.
            </p>
            <button className="hero-section-order-button">
              Oder Now <FiArrowRight size={'17px'}/>
            </button>
          </div>
          <div className="hero-section-image">
            <img src={homeImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
