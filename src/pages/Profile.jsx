import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import dollarimg from "../assets/dollar-img.png";
import Footer from "../Footer"; // Подключаем футер
import handshake from "../assets/handshake.png"; // Подключаем иконку
import connectWalletButton from "../assets/connectWalletButton.png"; // Подключаем иконку

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background"></div>

      {/* Логотип */}
        <img src={logo} alt="Logo" className="logo" />

      {/* Прямоугольник */}
      <div className="rectangle size-medium pos-top">
        <div className="left-side w-60">
          <p class="text01">01</p>
        </div>
        <div className="right-side w-40">
          <img src={dollarimg} class="dollar-icon" alt="Dollar Icon"/>
          <p class="text01">01</p>
        </div>
      </div>

      <div className="buttonPartners size-small pos-top2">
        <img src={handshake} class="partner-icon" alt="handshake"/>
      </div>

      <div className="buttonConnectWallet size-small2 pos-top-connectWallet">
        <img src={connectWalletButton} class="connectWallet-icon" alt="connectWallet"/>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;