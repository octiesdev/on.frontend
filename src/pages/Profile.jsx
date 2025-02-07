import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import dollarimg from "../assets/dollar-img.png";
import Footer from "../Footer"; // Подключаем футер
import handshake from "../assets/handshake.png"; // Подключаем иконку
import connectWalletButton from "../assets/connectWalletButton.png"; // Подключаем иконку
import priblizitelnoIcon from "../assets/priblizitelno-icon.png"; 
import depositIcon from "../assets/deposit-icon.png"; 
import withdrawIcon from "../assets/withdraw-icon.png"; 
import onexImg from "../assets/onex-img.png"; 

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background"></div>

      {/* Логотип */}
        <img src={logo} alt="Logo" className="logo" />

      <div className="buttonPartners">
        <img src={handshake} class="partner-icon" alt="handshake"/>
      </div>

      <div className="buttonConnectWallet">
        <img src={connectWalletButton} class="connectWallet-icon" alt="connectWallet"/>
      </div>

      {/* Прямоугольник */}
      <div className="rectangleMainInfo size-medium pos-top">
        <div className="left-side">
          <p class="textTotalAmount">0.00</p>
        <div className="textTotalAmountRUBContainer">
          <p class="textTotalAmountRUB">0.00</p>
          <p class="textTotalAmountRUBSymbol">RUB</p>
        </div>
            <img src={priblizitelnoIcon} class="priblizitelno-icon" alt=""/>
        <div className="rectangleTON">
          <p class="textTON">TON</p>
        </div>
        <div className="buttonDeposit">
        <div className="buttonDepositContainer">
           <img src={depositIcon} class="deposit-icon" alt=""/>
          <p class="textDepositAndWithdraw">Ввод</p>
        </div>
        </div>
        <div className="buttonWithdraw">
        <div className="buttonWithdrawContainer">
            <img src={withdrawIcon} class="withdraw-icon" alt=""/>
          <p class="textDepositAndWithdraw">Вывод</p>
        </div> 
        </div>
      </div>
        <div className="right-side">
          <img src={dollarimg} class="dollar-icon" alt="Dollar Icon"/>
          <p class="text01">01</p>
        </div>
      </div>

      <div className="rectangleOnexPoints size-small pos-top2">
        <div className="left-side">
         <p class="textTotalAmount">0</p>
        <div className="rectangleONEX">
          <p class="textTON">ONEX</p>
        </div>
        </div>
        <div className="right-side">
          <img src={onexImg} class="onex-img" alt=""/>
          <p class="text01">02</p>
        </div>
      </div>



      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;