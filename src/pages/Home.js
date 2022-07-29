import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/meal.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{  fontStyle:"italic"}}> HotelierKE</h1>
        <p> Want scrumptious!!</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
