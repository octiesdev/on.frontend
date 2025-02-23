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
import receiveIcon from "../assets/receive-icon.png";
import onexImg from "../assets/onex-img.png"; 
import onex50opacityImg from "../assets/onex50opacity-img.png";
import tonIMG from "../assets/ton-img.png";

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
        <div className="rectangleTONAndtextTotalAmountContainer">
          <p class="textTotalAmount">5443.98</p>
        <div className="rectangleTON">
          <p class="textTON">TON</p>
        </div>
        </div>
        <div className="textTotalAmountRUBContainer">
          <p class="textTotalAmountRUB">0.00</p>
          <p class="textTotalAmountRUBSymbol">RUB</p>
        </div>
            <img src={priblizitelnoIcon} class="priblizitelno-icon" alt=""/>
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
        <div className="rectangleTONAndtextTotalAmountContainer">
          <p class="textTotalAmount">35</p>
        <div className="rectangleONEX">
          <p class="textTON">ONEX</p>
        </div>
        </div>
        </div>
        <div className="buttonReceive">
          <div className="buttonReceiveContainer">
            <img src={receiveIcon} class="receive-icon" alt=""/>
              <p class="textDepositAndWithdraw">Получить</p>
          </div>
        </div>
        <div className="right-side">
          <img src={onexImg} class="onex-icon" alt=""/>
          <p class="text01">02</p>
        </div>
      </div>

      <div className="rectangleAvaliableDropGroupBox size-medium2 pos-top-rectangleAvaliableDrop">
        <div className="textAvaliableDrop ">ДОСТУПНЫЙ ДРОП</div>
          <div className="rectangleAvaliableDropforOnex50opacity">
            <div className="left-side">
            </div>
            <div className="right-side">
              <img src={onex50opacityImg} class="onex50opacity-icon" alt=""/>
            </div>
          </div>
          <div className="rectangleAvaliableDrop">
            
            <div className="rectangleTONIMGAndtextTONNameContainer">
                <img src={tonIMG} class="ton-icon" alt=""/>
                <p class="textTONName">TON</p>
            </div>

            <div className="rectangleFarmTimeAndRewardsInTonContainer">
              <div className="rectangleFarmingTime">

              </div>
              <div className="rectangleAvaliableOnexs">
              
              </div>
              <div className="rectangleRewardsInTon">
            
              </div>
         
            </div>

            <div className="rectanglePushFarming">
            
            </div>

    
      
            <p class="text01">03</p> 
        
        </div>
      </div>





      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;