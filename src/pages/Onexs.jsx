import React from "react";
import "../styles/Onexs.css"; // Подключаем новый CSS
import tonIMG from "../assets/ton-img.png"; // Иконка TON
import Footer from "../Footer"; // Подключаем футер

const Onexs = () => {
  return (
    <div className="test-container">
      {/* Новый блок */}
      <div className="rectangleAvaliableDrop2">
      {/* Заголовок */}
      <div className="header">
        <img src={tonIcon} alt="TON" className="header-icon" />
        <p className="header-text">TON</p>
      </div>

      {/* Блок 1 - Период фарминга */}
      <div className="info-block info-block-1">
        <p className="info-text">Период фарминга</p>
        <p className="bold-text">1 день</p>
      </div>

      {/* Блок 2 - Доступно ONEX's */}
      <div className="info-block info-block-2">
        <p className="info-text">Доступно ONEX’s</p>
        <p className="bold-text">
          <span className="green-text">99</span> / 100
        </p>
      </div>

      {/* Блок 3 - Награда в TON */}
      <div className="info-block info-block-3">
        <p className="info-text">Награда в TON</p>
        <div className="reward">
          <p className="bold-text">+1 TON</p>
          <img src={rewardIcon} alt="Reward Icon" className="reward-icon" />
        </div>
      </div>

      {/* Кнопка */}
      <div className="button">ЗАПУСТИТЬ БЕСПЛАТНО</div>
    </div>

        <Footer />
    </div>
  );
};

export default Onexs;