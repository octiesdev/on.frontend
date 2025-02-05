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
      <div className="rectangle size-small pos-left">
        <div className="left-side w-50">Левая 50%</div>
        <div className="right-side w-50">Правая 50%</div>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;