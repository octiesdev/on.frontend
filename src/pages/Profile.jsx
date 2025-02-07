import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import dollarimg from "../assets/dollar-img.png";
import Footer from "../Footer"; // Подключаем футер
import handshake from "../assets/handshake.png"; // Подключаем иконку
import connectWalletButton from "../assets/connectWalletButton.png"; // Подключаем иконку
import priblizitelnoIcon from "../assets/priblizitelno-icon.png"; 

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background"></div>

      {/* Логотип */}
        <img src={logo} alt="Logo" className="logo" />

      {/* Прямоугольник */}
      <div className="rectangle size-medium pos-top">
        <div className="left-side">
          <p class="textTotalAmount">0.00</p>
          <p class="textTotalAmountRUB">0.00</p>
            <img src={priblizitelnoIcon} class="priblizitelno-icon" alt=""/>
            <img src={rub-icon} class="rub-icon" alt=""/>
        <div className="rectangleTON">
            <p class="textTON">TON</p>
          </div>
        <div className="rectangleDeposit">

        </div>
        <div className="rectangleWithdraw">
                
        </div>
      </div>
        <div className="right-side">
          <img src={dollarimg} class="dollar-icon" alt="Dollar Icon"/>
          <p class="text01">01</p>
        </div>
      </div>

      <div className="buttonPartners">
        <img src={handshake} class="partner-icon" alt="handshake"/>
      </div>

      <div className="buttonConnectWallet">
        <img src={connectWalletButton} class="connectWallet-icon" alt="connectWallet"/>
      </div>



      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;