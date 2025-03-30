import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { TonConnectButton, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import "../styles/AmbasProgram.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import Footer from "../Footer"; // Подключаем футер
import onexIMG from "../assets/onex-circle.png";
import blumIMG from "../assets/blum-circle.png";
import pawsIMG from "../assets/paws-circle.png";
import terminalIMG from "../assets/terminal-circle.png";
import tonIMG from "../assets/ton-img.png";
import logoEclipseIMG from "../assets/logo-with-eclipse.png";

const AmbasProgram = () => { 

    const navigate = useNavigate();
    
    const handleSupportClick = () => {
      window.open("https://t.me/zustrich_lab_hr", "_blank");
    };

  return (
    <div className="App">
      {/* Фон */}
      <div className="ONEXs_Window">   
        <div className="Header">  
          <div className="HeaderLogoContainer">  
            <img src={logo} alt="Logo" className="headerlogo" onClick={() => navigate("/")}></img>
          </div>
            <div className="HeaderButtonsContainer">  
              <img src={buttonPartners} alt="" className="headerButtonPartners"/>
              <TonConnectButton/>
            </div>
        </div>
        <div className="mainambasProgramPageContainer">  
          <div className="info-ambasProgram-block"> 
            <div className="info-ambasProgram-nameText"> 
              <h2>AMBASADOR<br/>PROGRAM</h2>
              <p>1. Зарабатывай TON с каждой покупки твоих рефералов.</p>
              <p>2. Фарми фиксированное количество ONEX за каждого<br/>приглашенного реферала.</p>
            </div>
          </div>
          <div className="logoEclipse"> 
            <img src={logoEclipseIMG} alt=""/>
          </div>
          <div className="rectangle-button-getAmbassAcess" onClick={handleSupportClick}>
            СТАТЬ АМБАСАДОРОМ
          </div>
        </div>
        </div>
        {/* Футер */}
            <Footer />
        </div>
        );
    };
    export default AmbasProgram;