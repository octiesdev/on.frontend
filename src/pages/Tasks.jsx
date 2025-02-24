import React from "react";
import "../styles/Tasks.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import tonIMG from "../assets/ton-img.png";
import onexIMG from "../assets/onex-circle.png";
import Footer from "../Footer"; // Подключаем футер

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
          <div className="info-onexs-block"> 
            <div className="info-onexs-nameText"> 
              <h2>ONEXs</h2>
              <p>Активация ONEX’s позволяет заработать<br/>TON, ONEX и др. криптовалюты.</p>
                <div className="section-buttons">
                  <button class="all-button">Все</button>
                  <button class="my-button">Мои</button>
                  <button class="limited-button">Ограниченные</button>
                </div> 
            </div>
          </div>
          <div className="onex-node"> 
            <div className="info-section-logo"> 
              <div className="tonlogo"> 
                <img src={tonIMG}/>
                <h2>TON</h2>
              </div>
              <div className="onexlogo"> 
                <img src={onexIMG}/>
                <h2>ONEX</h2>
              </div>
              <div className="numberOnexNode"> 
                <h2>01</h2>
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