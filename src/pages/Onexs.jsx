import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";
import "../styles/Onexs.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import tonIMG from "../assets/ton-img.png";
import onexIMG from "../assets/onex-circle.png";
import Footer from "../Footer";

const API_URL = "https://adminviber1x-production.up.railway.app"; // Укажите правильный адрес сервера

const Onexs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [onexNodes, setOnexNodes] = useState([]);
  const [userNodes, setUserNodes] = useState([]);

  const navigate = useNavigate();

  // Загружаем ноды с сервера
  useEffect(() => {
    fetch(`${API_URL}/onex-nodes`)
      .then((res) => res.json())
      .then((data) => {
        setOnexNodes(data);
      })
      .catch((error) => console.error("Ошибка загрузки нод:", error));
  }, []);

  // Запуск ноды (перенос в "my")
  const startFarming = (node) => {
    if (userNodes.some((n) => n._id === node._id)) return;

    // Создаем таймер окончания фарминга
    const endTime = Date.now() + node.days * 24 * 60 * 60 * 1000;
    
    setUserNodes([...userNodes, { ...node, farmEndTime: endTime }]);
  };

  // Отображаем оставшееся время таймера
  const getRemainingTime = (endTime) => {
    const diff = endTime - Date.now();
    if (diff <= 0) return "ЗАФАРМЛЕНО";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    return `${hours}ч ${minutes}м`;
  };

  return (
    <div className="App">
      <div className="ONEXs_Window">
        <div className="Header">
          <div className="HeaderLogoContainer">
            <img src={logo} alt="Logo" className="headerlogo" onClick={() => navigate("/")}></img>
          </div>
          <div className="HeaderButtonsContainer">
            <img src={buttonPartners} alt="" className="headerButtonPartners" onClick={() => navigate("/ambasProgram")}></img>
            <TonConnectButton />
          </div>
        </div>

        <div className="mainTasksPageContainer">
          <div className="info-onexs-block">
            <div className="info-onexs-nameText">
              <h2>ONEXs</h2>
              <p>Активация ONEX’s позволяет заработать<br/>TON, ONEX и др. криптовалюты.</p>
              <div className="section-buttons">
                <button className={`all-button ${selectedCategory === "all" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("all")}>Все</button>
                <button className={`my-button ${selectedCategory === "my" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("my")}>Мои</button>
                <button className={`limited-button ${selectedCategory === "limited" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("limited")}>Ограниченные</button>
              </div>
            </div>
          </div>

          {/* 🔥 Отображаем ноды по категориям */}
          {selectedCategory === "all" && (
            <>
              {onexNodes.filter(node => node.section === "all").map((node, index) => (
                <div className="onex-node all" key={node._id}>
                  <NodeBlock node={node} index={index} onStartFarming={startFarming} />
                </div>
              ))}
            </>
          )}

          {selectedCategory === "limited" && (
            <>
              {onexNodes.filter(node => node.section === "limited").map((node, index) => (
                <div className="onex-node limited" key={node._id}>
                  <NodeBlock node={node} index={index} onStartFarming={startFarming} />
                </div>
              ))}
            </>
          )}

          {selectedCategory === "my" && (
            <>
              {userNodes.map((node, index) => (
                <div className="onex-node my" key={node._id}>
                  <NodeBlock node={node} index={index} farming={true} endTime={node.farmEndTime} getRemainingTime={getRemainingTime} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Компонент для отрисовки одной ноды
const NodeBlock = ({ node, index, onStartFarming, farming, endTime, getRemainingTime }) => {
  return (
    <div className="info-onexs-nameText">
      <div className="info-section-logo">
        <div className="ton-onex-logo">
          <img src={tonIMG} />
          <h2>TON</h2>
          <img src={onexIMG} />
          <h2>ONEX</h2>
        </div>
        <div className="number-OnexNode">
          <h2>{index + 1}</h2>
        </div>
      </div>
      <div className="onexNode-infoBlocks">
        <div className="first-onexNode-infoBlock">
          <div className="farming-time-block">
            <div className="farming-time-block-MainText">Период фарминга</div>
            <div className="farming-time-block-Description">{node.days} дней</div>
          </div>
          <div className="apy-info-block">
            <div className="farming-time-block-MainText">APY</div>
            <div className="farming-time-block-Description">{node.apy}%</div>
          </div>
        </div>
        <div className="single-onexNode-infoBlock">
          <div className="rewardInTon-block">
            <div className="farming-time-block-MainText">Награда в TON</div>
            <div className="farming-time-block-Description">
              {node.reward} TON
              <img src={tonIMG} />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Кнопка старта или таймер */}
      <div className="onexNode-PayButton">
        {farming ? (
          <div className="pay-button">{getRemainingTime(endTime)}</div>
        ) : (
          <div className="pay-button" onClick={() => onStartFarming(node)}>
            ЗАПУСТИТЬ ЗА {node.stake} TON
          </div>
        )}
      </div>
    </div>
  );
};

export default Onexs;