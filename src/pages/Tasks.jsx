import React, { useState } from "react";
import "../styles/Tasks.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import Footer from "../Footer"; // Подключаем футер
import onexIMG from "../assets/onex-circle.png";
import tonIMG from "../assets/ton-img.png";

const Tasks = () => {

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
          <div className="onex-task"> 
            <div className="info-tasks-nameText">
              <div className="info-section">
                <div className="infoSection-all-logo"> 
                  <img src={onexIMG}/>
                  <h2>ПРИСОЕДИНЯЙСЯ<br/>К ONEX!</h2>
                </div>
                <div className="infoSection-all-logo"> 
                  <img src={onexIMG}/>
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

export default Tasks;