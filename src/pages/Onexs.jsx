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

const API_URL_MAIN = "https://1xback-production.up.railway.app"; 

const Onexs = () => {
  const { userId } = useUser();
  const navigate = useNavigate();
  
  const [onexNodes, setOnexNodes] = useState([]);   
  const [userNodes, setUserNodes] = useState([]);   
  const [purchasedNodes, setPurchasedNodes] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 📌 Загружаем ВСЕ ноды
  useEffect(() => {
    fetch(`${API_URL_MAIN}/onex-nodes`)
      .then((res) => res.json())
      .then(setOnexNodes)
      .catch((error) => console.error("Ошибка загрузки нод:", error));
  }, []);

  // 📌 Загружаем активные ноды пользователя
  useEffect(() => {
    if (!userId) return;
    fetch(`${API_URL_MAIN}/get-active-paid-nodes?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setUserNodes(data.activePaidNodes || []))
      .catch((error) => console.error("Ошибка загрузки активных нод:", error));
  }, [userId]);

  // 📌 Загружаем историю купленных нод
  useEffect(() => {
    if (!userId) return;
    fetch(`${API_URL_MAIN}/get-paid-farming-status`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
      .then((res) => res.json())
      .then((data) => setPurchasedNodes(data.purchasedPaidNodes || []))
      .catch((error) => console.error("Ошибка загрузки купленных нод:", error));
  }, [userId]);

  // 🔥 Обновляем ноды в `all`, если они были зафармлены
  useEffect(() => {
    if (!purchasedNodes.length) return;

    setOnexNodes((prevNodes) =>
      prevNodes.map((node) => {
        const isFarmed = purchasedNodes.some(n => String(n.nodeId) === String(node._id));
        return {
          ...node,
          status: isFarmed ? "зафармлено" : node.status
        };
      })
    );
  }, [purchasedNodes]);

  // 🔥 Запуск платного фарминга
  const startPaidFarming = async (node) => {
    if (!userId) return console.error("❌ Ошибка: userId отсутствует!");
  
    try {
      const response = await fetch(`${API_URL_MAIN}/start-paid-farming`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, nodeId: node._id }),
      });

      const data = await response.json();
      if (!data.success) return console.error("❌ Ошибка:", data.error);
  
      console.log("✅ Платная нода запущена успешно:", data);
  
      // ✅ Добавляем ноду в "Мои" со статусом "таймер"
      setUserNodes((prevNodes) => [
        ...prevNodes, 
        { ...node, status: "таймер", farmEndTime: data.farmEndTime }
      ]);
    } catch (error) {
      console.error("❌ Ошибка при запуске фарминга:", error);
    }
  };

  // 📌 Функция расчёта оставшегося времени
  const getRemainingTime = (endTime) => {
    const now = Date.now();
    const diff = new Date(endTime).getTime() - now;
    if (diff <= 0) return "ЗАФАРМЛЕНО";
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    return `${hours}ч ${minutes}м ${seconds}с`;
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
          <h2>ONEXs</h2>
          <div className="section-buttons">
            <button className={selectedCategory === "all" ? "active" : ""} onClick={() => setSelectedCategory("all")}>Все</button>
            <button className={selectedCategory === "my" ? "active" : ""} onClick={() => setSelectedCategory("my")}>Активные</button>
          </div>

          {/* 🔥 Отображаем секцию "Все" */}
          {selectedCategory === "all" && (
            <>
              {onexNodes
                .filter(node => !purchasedNodes.some(n => String(n.nodeId) === String(node._id))) // ✅ Фильтруем зафармленные
                .map((node) => (
                  <NodeBlock key={node._id} node={node} onStartFarming={startPaidFarming} />
              ))}
            </>
          )}

          {/* 🔥 Отображаем секцию "Мои" */}
          {selectedCategory === "my" && (
            <>
              {userNodes.map((node) => (
                <NodeBlock key={node._id} node={node} farming endTime={node.farmEndTime} getRemainingTime={getRemainingTime} />
              ))}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Компонент для отображения ноды
const NodeBlock = ({ node, onStartFarming, farming, endTime, getRemainingTime }) => (
  <div className="info-onexs-nameText">
    <h3>Фарминг: {node.days} дней | APY: {node.apy}%</h3>
    <div className="onexNode-PayButton">
      {node.status === "зафармлено" ? (
        <div className="pay-button-onexs-farmed">ЗАФАРМЛЕНО</div>
      ) : farming ? (
        <div className="pay-button">{getRemainingTime(endTime)}</div>
      ) : (
        <div className="pay-button" onClick={() => onStartFarming(node)}>ЗАПУСТИТЬ</div>
      )}
    </div>
  </div>
);

export default Onexs;