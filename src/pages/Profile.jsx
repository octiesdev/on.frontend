import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import Footer from "../Footer";

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background"></div>

      {/* Логотип */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Основной контент */}
      <div className="content">
        <h1>!scam alert! pls exit ^-^</h1>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;