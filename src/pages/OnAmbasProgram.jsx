import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/OnAmbasProgram.css";
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
import logoInTheEclipseIMG from "../assets/onex-img-all.png"

const OnAmbasProgram = () => { 

    const navigate = useNavigate();

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
              <img src={buttonConnectWallet} alt="" className="headerConnectWalletConnected"/>
            </div>
        </div>
        <div className="mainOnAmbasProgramPageContainer">  
          <div className="info-OnAmbasProgram-block"> 
            <div className="info-OnAmbasProgram-nameText"> 
              <h2>AMBASADOR<br/>PROGRAM</h2>
              <p>1. Зарабатывай TON с каждой покупки твоих рефералов.</p>
              <p>2. Фарми фиксированное количество ONEX за каждого<br/>приглашенного реферала.</p>
            </div>
          </div>
          <div className="partner-terms"> 
            <div className="info-OnAmbasProgram-nameText2"> 
                <div className="info-OnAmbasProgram-section-title"> 
                    <h2>УСЛОВИЯ ПАРТНЕРСТВА</h2>
                </div>
                <div className="OnAmbasProgram-section-infoBlocks"> 
                    <div className="earnTON-block">
                        <div className="earnTON-block-MainText2">
                            % заработка TON 
                        </div>
                        <div className="earnTON-block-Description2">
                            10%
                            <img src={tonIMG} alt=""/>
                        </div>
                    </div>
                    <div className="earnONEX-block">
                        <div className="earnONEX-block-MainText2">
                            % заработка ONEX 
                        </div>
                        <div className="earnONEX-block-Description2">
                            20%
                            <img src={onexIMG} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="invite-button-block">
                    <div className="invite-button">
                        ПРИГЛАСИТЬ
                    </div>
                </div>
            </div>
          </div>
          <div className="text-friends-counter"> 
            3 друзей
          </div>
          <div className="info-about-friends-block"> 
            <div className="info-about-friends-block-nameText2"> 
                <div className="info-section-friend-eclipse-block"> 
                    <div className="friend-eclipse"> 
                        <img src={logoInTheEclipseIMG} alt=""/>
                    </div>
                    <h2>bullpitt4</h2>
                </div>
                <div className="OnAmbasProgram-section-friendsBlocks"> 
                    <div className="rewardInTON-block">
                        <div className="rewardInTON-block-MainText2">
                            Награда в TON 
                        </div>
                        <div className="rewardInTON-block-Description2">
                            100 TON
                            <img src={tonIMG} alt=""/>
                        </div>
                    </div>
                    <div className="rewardInONEX-block">
                        <div className="rewardInONEX-block-MainText2">
                            Награда в ONEX 
                        </div>
                        <div className="rewardInONEX-block-Description2">
                            16 ONEX
                            <img src={onexIMG} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="info-about-friends-block"> 
            <div className="info-about-friends-block-nameText2"> 
                <div className="info-section-friend-eclipse-block"> 
                    <div className="friend-eclipse-v2"> 
                        <img src={logoInTheEclipseIMG} alt=""/>
                    </div>
                    <h2>sampled1kx0</h2>
                </div>
                <div className="OnAmbasProgram-section-friendsBlocks"> 
                    <div className="rewardInTON-block">
                        <div className="rewardInTON-block-MainText2">
                            Награда в TON 
                        </div>
                        <div className="rewardInTON-block-Description2">
                            59 TON
                            <img src={tonIMG} alt=""/>
                        </div>
                    </div>
                    <div className="rewardInONEX-block">
                        <div className="rewardInONEX-block-MainText2">
                            Награда в ONEX 
                        </div>
                        <div className="rewardInONEX-block-Description2">
                            24 ONEX
                            <img src={onexIMG} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="info-about-friends-block-last"> 
            <div className="info-about-friends-block-nameText2"> 
                <div className="info-section-friend-eclipse-block"> 
                    <div className="friend-eclipse-v3"> 
                        <img src={logoInTheEclipseIMG} alt=""/>
                    </div>
                    <h2>maiskyyGor4o</h2>
                </div>
                <div className="OnAmbasProgram-section-friendsBlocks"> 
                    <div className="rewardInTON-block">
                        <div className="rewardInTON-block-MainText2">
                            Награда в TON 
                        </div>
                        <div className="rewardInTON-block-Description2">
                            20 TON
                            <img src={tonIMG} alt=""/>
                        </div>
                    </div>
                    <div className="rewardInONEX-block">
                        <div className="rewardInONEX-block-MainText2">
                            Награда в ONEX 
                        </div>
                        <div className="rewardInONEX-block-Description2">
                            08 ONEX
                            <img src={onexIMG} alt=""/>
                        </div>
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

export default OnAmbasProgram;