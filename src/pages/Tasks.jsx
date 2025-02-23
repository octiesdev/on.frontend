import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import dollarimg from "../assets/dollar-img.png";
import Footer from "../Footer"; // Подключаем футер

const Tasks = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background">

      {/* Логотип */}
        <img src={logo} alt="Logo" className="logo" />

      <div className="Menu">
      <div className="AvaliableDrop"></div>
      </div>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Tasks;