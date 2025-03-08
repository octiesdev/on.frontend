import React, { useState } from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import Footer from "../Footer"; // Подключаем футер
import onexIMG from "../assets/onex-circle.png";
import blumIMG from "../assets/blum-circle.png";
import pawsIMG from "../assets/paws-circle.png";
import terminalIMG from "../assets/terminal-circle.png";
import tonIMG from "../assets/ton-img.png";
import rubIMG from "../assets/rub-icon.png";
import depoIMG from "../assets/deposit-icon.png";
import withIMG from "../assets/withdraw-icon.png";
import dollarIMG from "../assets/dollar-img.png";
import receiveIMG from "../assets/receive-icon.png";
import onexlogoIMG from "../assets/onex-img-all.png";


const Profile = () => {

  return (
    <div className="App">
      {/* Фон */}
      <div className="ONEXs_Window">   
        <div className="Header">  
          <div className="HeaderLogoContainer">  
            <img src={logo} alt="Logo" className="headerlogo"/>
          </div>
            <div className="HeaderButtonsContainer">  
              <img src={buttonPartners} alt="" className="headerButtonPartners"/>
              <img src={buttonConnectWallet} alt="" className="headerConnectWalletConnected"/>
            </div>
        </div>
        <div className="mainProfilePageContainer">  
          <div className="info-profile-block"> 
            <div className="info-profile-nameText55"> 
              <div className="rectangle-info-profile">
                <h2>
                <span className="text-in-rectangle">385.57</span>
                  <div className="rectangle-info-profile-ton">
                    TON
                  </div>
                </h2>
                <p>
                  ≈ 545.322.79
                  <img src={rubIMG}/>
                </p>
              </div>
              <div className="rectangle-for-buttons-profile">
                  <div className="rectangle-buttons-depo">
                    <img src={depoIMG} className="buttons-icons"/>
                    Ввод
                  </div>
                  <div className="rectangle-buttons-with">
                    <img src={withIMG} className="buttons-icons"/>
                    Вывод
                  </div>
              </div>
            </div>
            <div className="info-profile-nameText45"> 
              <h2>01</h2>
              <img src={dollarIMG} className="dollar-icon"/>
            </div>
          </div>
          <div className="info-onex-block"> 
            <div className="info-onex-nameText40"> 
              <div className="rectangle-info-onex">
                <h2>
                  <span className="text-in-rectangle2">08</span>
                  <div className="rectangle-info-onex-onex">
                    ONEX
                  </div>
                </h2>
              </div>
              <div className="rectangle-for-button-onex">
                <div className="rectangle-buttons-receive">
                  <img src={receiveIMG} className="receive-button-icon"/>
                  Получить
                </div>
              </div>
            </div>
            <div className="info-onex-nameText60"> 
              <h2>02</h2>
              <img src={onexlogoIMG} className="onex-logo-icon"/>
            </div>
          </div>
          <div className="text-avaliable-drop">
            ДОСТУПНЫЙ ДРОП
          </div>
          <div className="onex-node"> 
            <div className="info-onexs-nameText"> 
              <div className="info-section-logo"> 
                <div className="ton-onex-logo"> 
                  <img src={tonIMG}/>
                  <h2>TON</h2>
                </div>
                <div className="number-OnexNode-profile"> 
                  <h2>01</h2>
                </div>
              </div>
              <div className="onexNode-infoBlocks">
                <div className="first-onexNode-infoBlock">
                  <div className="farming-time-block">
                    <div className="farming-time-block-MainText">
                      Период фарминга
                    </div>
                    <div className="farming-time-block-Description">
                      3 дня
                    </div>
                  </div>
                  <div className="apy-info-block">
                    <div className="farming-time-block-MainText">
                        APY
                      </div>
                      <div className="farming-time-block-Description">
                        10%
                    </div>
                  </div>  
                </div>
                <div className="single-onexNode-infoBlock">
                  <div className="rewardInTon-block">
                    <div className="farming-time-block-MainText">
                        Награда в TON
                      </div>
                      <div className="farming-time-block-Description">
                        5.5 TON
                        <img src={tonIMG}/>
                    </div>
                  </div>
                  <div className="rewardInOnex-block">
                    <div className="farming-time-block-MainText">
                        Награда в ONEX
                      </div>
                      <div className="farming-time-block-Description">
                        10 ONEX
                        <img src={onexIMG}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onexNode-PayButton">
                <div className="pay-button-profile">
                  ЗАПУСТИТЬ БЕСПЛАТНО
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Футер */}
       <Footer />
    </div>
  );
};

export default Profile;
        