import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import dollarimg from "../assets/dollar-img.png";
import Footer from "../Footer"; // Подключаем футер

const Tasks = () => {
  return (
    <div className="profile-container2">
      {/* Фон */}
      <div className="background">   </div>

      {/* Логотип */}
        <img src={logo} alt="Logo" className="logo" />

      <div className="Menu">
      <div className="AvaliableDrop"></div>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Tasks;