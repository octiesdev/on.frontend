import React from "react";  // ✅ ОБЯЗАТЕЛЬНО
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import Footer from "../Footer";

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="content">
        <h1>ONEX Telegram App</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;