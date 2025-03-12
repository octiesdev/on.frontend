import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Tasks.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import Footer from "../Footer"; // Подключаем футер
import onexIMG from "../assets/onex-circle.png";
import blumIMG from "../assets/blum-circle.png";
import pawsIMG from "../assets/paws-circle.png";
import terminalIMG from "../assets/terminal-circle.png";
import tonIMG from "../assets/ton-img.png";

const Tasks = () => {

  return (
    <div className="App">
      {/* Фон */}
      <div className="ONEXs_Window">   
        <div className="Header">  
          <div className="HeaderLogoContainer">  
            <img src={logo} alt="Logo" className="headerlogo" onClick={() => navigate("/")}></img>
          </div>
            <div className="HeaderButtonsContainer">  
              <img src={buttonPartners} alt="" className="headerButtonPartners" onClick={() => navigate("/ambasProgram")}></img>
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
                <div className="infoSection-all-text"> 
                  <h2>+10<br/>ONEX</h2>
                </div>
              </div>
              <div className="task-to-be-complete-button"> 
                  <div className="to-be-complete-button"> 
                    ВЫПОЛНИТЬ
                  </div>
              </div>
            </div>
          </div>
          <div className="onex-task2"> 
            <div className="info-tasks-nameText">
              <div className="info-section">
                <div className="infoSection-all-logo"> 
                  <img src={onexIMG}/>
                  <h2>ПРИСОЕДИНЯЙСЯ<br/>К ЧАТУ ONEX!</h2>
                </div>
                <div className="infoSection-all-text"> 
                  <h2>+10<br/>ONEX</h2>
                </div>
              </div>
              <div className="task-to-be-complete-button"> 
                  <div className="to-be-complete-button"> 
                    ВЫПОЛНИТЬ
                  </div>
              </div>
            </div>
          </div>
          <div className="onex-task3"> 
            <div className="info-tasks-nameText">
              <div className="info-section">
                <div className="infoSection-all-logo"> 
                  <img src={blumIMG}/>
                  <h2>ПРИСОЕДИНЯЙСЯ<br/>К BLUM!</h2>
                </div>
                <div className="infoSection-all-text"> 
                  <h2>+8<br/>ONEX</h2>
                </div>
              </div>
              <div className="task-to-be-complete-button"> 
                  <div className="to-be-complete-button"> 
                    ВЫПОЛНИТЬ
                  </div>
              </div>
            </div>
          </div>
          <div className="onex-task3"> 
            <div className="info-tasks-nameText">
              <div className="info-section">
                <div className="infoSection-all-logo"> 
                  <img src={pawsIMG}/>
                  <h2>ПРИСОЕДИНЯЙСЯ<br/>К PAWS!</h2>
                </div>
                <div className="infoSection-all-text"> 
                  <h2>+8<br/>ONEX</h2>
                </div>
              </div>
              <div className="task-to-be-complete-button"> 
                  <div className="to-be-complete-button"> 
                    ВЫПОЛНИТЬ
                  </div>
              </div>
            </div>
          </div>
          <div className="onex-task4"> 
            <div className="info-tasks-nameText">
              <div className="info-section">
                <div className="infoSection-all-logo"> 
                  <img src={terminalIMG}/>
                  <h2>ПРИСОЕДИНЯЙСЯ<br/>К TERMINAL!</h2>
                </div>
                <div className="infoSection-all-text"> 
                  <h2>+8<br/>ONEX</h2>
                </div>
              </div>
              <div className="task-to-be-complete-button"> 
                  <div className="to-be-complete-button"> 
                    ВЫПОЛНИТЬ
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