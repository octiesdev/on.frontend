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
                <h2>35.57</h2>
                <p>≈ 545.322.79<br/></p>
              </div>
            </div>
            <div className="info-profile-nameText45"> 
              <div className="rectangle-info-profile h2">
              <h2>35.57</h2>
              </div>
              <p>Выполняй задания, чтобы фармить ONEX.<br/></p>
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
        