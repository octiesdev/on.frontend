import React from "react";
import "../styles/Onexs.css"; // Подключаем новый CSS
import tonIMG from "../assets/ton-img.png"; // Иконка TON
import Footer from "../Footer"; // Подключаем футер

const Onexs = () => {
  return (
    <div className="test-container">
      {/* Новый блок */}
      <div className="rectangleAvaliableDrop">
        <div className="header">
          <img src={tonIMG} alt="TON Icon" className="ton-icon" />
          <p className="ton-title">TON</p>
        </div>

        <div className="info-container">
          <div className="farming-period">
            <p>Период фарминга</p>
            <p><strong>1 день</strong></p>
          </div>
          
          <div className="available-onex">
            <p>Доступно ONEX’s</p>
            <p><span className="available">99</span> / 100</p>
          </div>
        </div>

        <div className="reward-container">
          <p>Награда в TON</p>
          <p><strong>+1 TON</strong> <img src={tonIMG} alt="TON Icon" className="reward-icon" /></p>
        </div>

        <button className="start-farming">ЗАПУСТИТЬ БЕСПЛАТНО</button>
      </div>

        <Footer />
    </div>
  );
};

export default Onexs;