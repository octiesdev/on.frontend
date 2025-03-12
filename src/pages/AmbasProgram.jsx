import React, { useState } from "react";
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

const AmbasProgram = () => {

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
        <div className="mainTasksPageContainer">  
          <div className="info-tasks-block"> 
            <div className="info-onexs-nameText"> 
              <h2>ONEX TASKS</h2>
              <p>Выполняй задания, чтобы фармить ONEX.<br/></p>
            </div>
        </div>
        </div>
        </div>
        </div>
        );
    };
    export default AmbasProgram;