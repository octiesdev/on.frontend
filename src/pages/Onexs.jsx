import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useUser } from "../UserContext"; 
import "../styles/Onexs.css";

import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import tonIMG from "../assets/ton-img.png";
import onexIMG from "../assets/onex-circle.png";
import Footer from "../Footer";

const API_URL = "https://adminviber1x-production.up.railway.app"; 
const API_URL_MAIN = "https://1xback-production.up.railway.app"; 

const Onexs = () => {
  const { userId, fetchBalance } = useUser(); 
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [onexNodes, setOnexNodes] = useState([]);
  const [userNodes, setUserNodes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchActiveNodes = async () => {
      try {
        const response = await fetch(`${API_URL_MAIN}/get-active-paid-nodes?userId=${userId}`);
        const data = await response.json();

        if (Array.isArray(data.activePaidNodes)) {
          setUserNodes(data.activePaidNodes);

          // ✅ Если у пользователя есть зафармленные ноды - обновляем баланс
          if (data.activePaidNodes.some(n => n.status === "зафармлено")) {
            console.log("🎉 Найдены завершенные ноды! Обновляем баланс...");
            fetchBalance(userId);
          }
        }
      } catch (error) {
        console.error("Ошибка при загрузке активных нод:", error);
      }
    };

    fetchActiveNodes();
  }, [userId]);

  // ✅ Загружаем ноды с сервера
  useEffect(() => {
    fetch(`${API_URL}/onex-nodes`)
      .then((res) => res.json())
      .then((data) => {
        setOnexNodes(data);
      })
      .catch((error) => console.error("Ошибка загрузки нод:", error));
  }, []);

  // ✅ Запуск платного фарминга
  const startPaidFarming = async (node) => {
    if (!userId) {
      console.error("❌ Ошибка: userId отсутствует!");
      return;
    }

    try {
      const response = await fetch(`${API_URL_MAIN}/start-paid-farming`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, nodeId: node._id }),
      });

      const data = await response.json();

      if (data.success) {
        if (Array.isArray(data.activePaidNodes)) {
          setUserNodes(data.activePaidNodes);
        }
      } else {
        console.error("❌ Ошибка:", data.error);
      }
    } catch (error) {
      console.error("❌ Ошибка при запуске платного фарминга:", error);
    }
  };

  // ✅ Запрос на обновление статуса нод
  useEffect(() => {
    if (!userId) return;

    const fetchActiveNodes = async () => {
      try {
        console.log("📌 Запрашиваем активные ноды...");
        const response = await fetch(`${API_URL_MAIN}/get-active-paid-nodes?userId=${userId}`);
        const data = await response.json();

        console.log("📌 Ответ сервера:", data);
        
        if (Array.isArray(data.activePaidNodes)) {
          setUserNodes(data.activePaidNodes);
        }
      } catch (error) {
        console.error("Ошибка при загрузке активных нод:", error);
      }
    };

    fetchActiveNodes();
  }, [userId]);

  // ✅ Функция для получения оставшегося времени
  const getRemainingTime = (endTime) => {
    const diff = new Date(endTime).getTime() - Date.now();
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
              {onexNodes.filter(node => node.section === "all").map((node) => (
                <NodeBlock key={node._id} node={node} onStartFarming={startPaidFarming} />
              ))}
            </>
          )}

          {selectedCategory === "my" && (
            <>
              {userNodes.map((node) => (
                <NodeBlock key={node._id} node={node} farming={node.status === "таймер"} endTime={node.farmEndTime} getRemainingTime={getRemainingTime} />
              ))}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

// 🔥 Компонент для отображения одной ноды
const NodeBlock = ({ node, onStartFarming, farming, endTime, getRemainingTime }) => {
  return (
    <div className="info-onexs-nameText">
      <div className="info-section-logo">
        <div className="ton-onex-logo">
          <img src={tonIMG} />
          <h2>TON</h2>
          <img src={onexIMG} />
          <h2>ONEX</h2>
        </div>
      </div>
      <div className="onexNode-infoBlocks">
        <div className="single-onexNode-infoBlock">
          <div className="rewardInTon-block">
            <div className="farming-time-block-MainText">Награда в TON</div>
            <div className="farming-time-block-Description">{node.rewardTon} TON</div>
          </div>
        </div>
      </div>

      <div className="onexNode-PayButton">
        {farming ? <div className="pay-button">{getRemainingTime(endTime)}</div> : <div className="pay-button" onClick={() => onStartFarming(node)}>Запустить</div>}
      </div>
    </div>
  );
};

export default Onexs;