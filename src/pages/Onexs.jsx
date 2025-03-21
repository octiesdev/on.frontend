import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useUser } from "../UserContext"; // ✅ Используем глобальный контекст для userId
import "../styles/Onexs.css";

import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import tonIMG from "../assets/ton-img.png";
import onexIMG from "../assets/onex-circle.png";
import Footer from "../Footer";

const API_URL = "https://adminviber1x-production.up.railway.app";
const API_URL_MAIN = "https://1xback-production.up.railway.app";

const Onexs = () => {
  const { userId } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [onexNodes, setOnexNodes] = useState([]);
  const [userNodes, setUserNodes] = useState([]);
  const [purchasedNodes, setPurchasedNodes] = useState([]);

  const navigate = useNavigate();

  // ✅ Загружаем ноды с сервера
  useEffect(() => {
    fetch(`${API_URL}/onex-nodes`)
      .then((res) => res.json())
      .then((data) => setOnexNodes(data))
      .catch((error) => console.error("Ошибка загрузки нод:", error));
  }, []);

  // ✅ Загружаем активные и зафармленные ноды
  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      try {
        // Загружаем активные ноды
        const response = await fetch(`${API_URL_MAIN}/get-active-paid-nodes?userId=${userId}`);
        const data = await response.json();
        if (Array.isArray(data.activePaidNodes)) setUserNodes(data.activePaidNodes);

        // Загружаем историю купленных нод
        const historyResponse = await fetch(`${API_URL_MAIN}/get-paid-farming-status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
        const historyData = await historyResponse.json();

        if (Array.isArray(historyData.purchasedPaidNodes)) {
          setPurchasedNodes(historyData.purchasedPaidNodes);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных пользователя:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  // ✅ Обновляем onexNodes, добавляя `status: "зафармлено"` для купленных нод
  useEffect(() => {
    if (!purchasedNodes.length) return;

    setOnexNodes((prevNodes) =>
      prevNodes.map((node) => {
        const isFarmed = purchasedNodes.some(n => String(n.nodeId) === String(node._id));
        return {
          ...node,
          status: isFarmed ? "зафармлено" : node.status || "доступно",
        };
      })
    );
  }, [purchasedNodes, userId]);

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
            <h2>ONEXs</h2>
            <p>Активация ONEX’s позволяет заработать TON, ONEX и др. криптовалюты.</p>
          </div>

          {/* 🔥 Отображаем ноды по категориям */}
          {selectedCategory === "all" && (
            <>
              {onexNodes.map((node) => (
                <div className="onex-node all" key={node._id}>
                  <NodeBlock node={node} />
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

// ✅ Исправленный NodeBlock
const NodeBlock = ({ node }) => {
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

      {/* 🔥 Кнопка отображает корректный статус */}
      <div className="onexNode-PayButton">
        {node.status === "зафармлено" ? (
          <div className="pay-button-onexs-farmed">ЗАФАРМЛЕНО</div>
        ) : (
          <div className="pay-button">ЗАПУСТИТЬ ЗА {node.stake} TON</div>
        )}
      </div>
    </div>
  );
};

export default Onexs;