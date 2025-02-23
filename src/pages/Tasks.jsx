import React from "react";
import "../styles/Tasks.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import Footer from "../Footer"; // Подключаем футер

const Tasks = () => {
  return (
    <div className="App">
      {/* Фон */}
      <div className="ONEXs_Window">   
        <div className="Header">  
          <img src={logo} alt="Logo" className="headerlogo"/>
          <img src={buttonPartners} alt="" className="headerButtonPartners"/>
          <img src={buttonConnectWallet} alt="" className="headerConnectWalletConnected"/>
        </div>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Tasks;