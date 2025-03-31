import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useUser } from "../UserContext";
import { TonConnectButton, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
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
import PartnerButton from "../pages/PartnerButton";

const OnAmbasProgram = () => { 
    const navigate = useNavigate();
    const { userId } = useUser();
    const [referrals, setReferrals] = useState([]);

    const [tonPercent, setTonPercent] = useState(0);
    const [onexPercent, setOnexPercent] = useState(0);
    const [hasAccess, setHasAccess] = useState(null);
    
    useEffect(() => {
      if (!userId) return;
      
      // Получение рефералов
      fetch(`https://1xback-production.up.railway.app/get-referrals?userId=${userId}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.referrals)) {
            setReferrals(data.referrals.map(ref => ({
              ...ref,
              rewardInTon: ref.rewardInTon || 0 // add default value
            })));
          }
        })
        .catch(err => {
          console.error("❌ Ошибка при получении рефералов:", err);
        });
      
      // Получение данных амбассадора
      fetch(`https://1xback-production.up.railway.app/get-ambassador-data?userId=${userId}`)
        .then(res => res.json())
        .then(data => {
          setTonPercent(data.tonPercent);
          setOnexPercent(data.onexPercent);
          setHasAccess(data.hasAccess);
        })
        .catch(err => {
          console.error("❌ Ошибка при получении данных амбассадора:", err);
        });
    }, [userId]);
    const [refCode, setRefCode] = useState("");

    useEffect(() => {
        if (!userId) return;

        fetch(`https://1xback-production.up.railway.app/get-ref-code?userId=${userId}`)
          .then(res => res.json())
          .then(data => {
            setRefCode(data.refCode);
          })
          .catch(err => {
            console.error("❌ Ошибка при получении реф. кода:", err);
          });
    }, [userId]);

    const handleInviteClick = () => {
        const telegramLink = `https://t.me/onnextest_bot?start=${refCode}`;
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(telegramLink)}&text=${encodeURIComponent("🔥 Присоединяйся к ONEX и зарабатывай TON и ONEX вместе со мной!")}`;
        window.Telegram?.WebApp?.openTelegramLink(telegramUrl);
        window.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.('heavy');
    };

    useEffect(() => {
        if (hasAccess === false) {
          navigate("/ambasprogram");
        }
    }, [hasAccess]);

    if (hasAccess === null) return null; // ⏳ Пока грузим данные — ничего не показываем

  return (
    <div className="App">
      {/* Фон */}
      <div className="ONEXs_Window">   
        <div className="Header">  
          <div className="HeaderLogoContainer">  
            <img src={logo} alt="Logo" className="headerlogo" onClick={() => navigate("/")}></img>
          </div>
            <div className="HeaderButtonsContainer">  
              <PartnerButton />
              <TonConnectButton/>
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
                            {tonPercent}%
                            <img src={tonIMG} alt=""/>
                        </div>
                    </div>
                    <div className="earnONEX-block">
                        <div className="earnONEX-block-MainText2">
                            % заработка ONEX 
                        </div>
                        <div className="earnONEX-block-Description2">
                            {onexPercent}%
                            <img src={onexIMG} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="invite-button-block">
                    <div className="invite-button" onClick={handleInviteClick}>
                        ПРИГЛАСИТЬ
                    </div>
                </div>
            </div>
          </div>
          <div className="text-friends-counter"> 
            {referrals.length} друзей
          </div>
          
          {referrals.map((ref, index) => (
            <div
              key={index}
              className={
                index === referrals.length - 1
                  ? "info-about-friends-block-last"
                  : "info-about-friends-block"
              }
            > 
              <div className="info-about-friends-block-nameText2"> 
                <div className="info-section-friend-eclipse-block"> 
                  <div className={`friend-eclipse${index === 1 ? "-v2" : index === 2 ? "-v3" : ""}`}> 
                    <img src={logoInTheEclipseIMG} alt=""/>
                  </div>
                  <h2>{ref.username.replace(/^@/, "")}</h2>
                </div>
                <div className="OnAmbasProgram-section-friendsBlocks"> 
                  <div className="rewardInTON-block">
                    <div className="rewardInTON-block-MainText2">
                      Награда в TON 
                    </div>
                  <div className="rewardInTON-block-Description2">
                    {ref.rewardInTon || 0} TON
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
          ))}
        </div>
    </div>
    {/* Футер */}
        <Footer />
    </div>
    );
};

export default OnAmbasProgram;