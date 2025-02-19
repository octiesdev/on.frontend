import React from "react";
import "../styles/Onexs.css"; // Подключаем новый CSS
import tonIMG from "../assets/ton-img.png"; // Иконка TON
import Footer from "../Footer"; // Подключаем футер

const Onexs = () => {
  return (
    <div className="rectangleAvaliableDrop2">
      {/* Заголовок */}
      <div className="header">
        <img src={tonIMG} alt="TON" className="header-icon" />
        <p className="header-text">TON</p>
      </div>

      {/* Контейнер с информацией */}
      <div className="info-container">
        <div className="info-block">
          <p className="info-title">Период фарминга</p>
          <p className="info-bold">1 день</p>
        </div>

        <div className="info-block">
          <p className="info-title">Доступно ONEX’s</p>
          <p className="info-bold"><span className="green-text">99</span> / 100</p>
        </div>

        <div className="info-block full-width">
          <p className="info-title">Награда в TON</p>
          <div className="reward">
            <p className="info-bold">+1 TON</p>
            <img src={tonIMG} alt="Reward" className="reward-icon" />
          </div>
        </div>
      </div>

      {/* Кнопка */}
      <div className="button-container">
        <button className="button">ЗАПУСТИТЬ БЕСПЛАТНО</button>
      </div>

        <Footer />
    </div>
  );
};

export default Onexs;