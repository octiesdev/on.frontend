import React from "react";
import "../styles/Tasks.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import onexImg from "../assets/onex-img.png"; 
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
            
          </div>
        </div>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Tasks;