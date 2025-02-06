import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import dollarimg from "../assets/dollar-img.png";
import Footer from "../Footer"; // Подключаем футер

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background"></div>

      {/* Логотип */}
        <img src={logo} alt="Logo" className="logo" />

      {/* Прямоугольник */}
      <div className="rectangle size-medium pos-top">
        <div className="left-side w-60"></div>
        <p class="text01">01</p>
        <div className="right-side w-40"></div>
        <img src={dollarimg} class="dollar-icon" alt="Dollar Icon"/>
        <p class="text01">01</p>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;