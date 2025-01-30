import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo1.png";
import Footer from "../Footer"; // Подключаем футер

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background"></div>

      {/* Логотип */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Основной контент */}
      <div className="content">
        <h1>^-^</h1>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;