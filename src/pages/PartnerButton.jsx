// components/PartnerButton.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import buttonPartners from "../assets/buttonPartners.png";

const PartnerButton = () => {
    const { userId } = useUser();
    const navigate = useNavigate();
    const [hasAccess, setHasAccess] = useState(null);
  
    useEffect(() => {
      if (!userId) return;
  
      console.log("👤 Проверяем ambassador доступ для userId:", userId);
  
      fetch(`https://1xback-production.up.railway.app/get-ambassador-data?userId=${userId}`)
        .then(res => res.json())
        .then((data) => {
          console.log("📡 Ответ от API:", data);
          setHasAccess(data.hasAccess);
        })
        .catch((err) => {
          console.error("❌ Ошибка при запросе:", err);
          setHasAccess(false);
        });
    }, [userId]);
  
    const handleClick = () => {
      if (hasAccess === null) return;
      navigate(hasAccess ? "/onambasprogram" : "/ambasprogram");
    };
  
    // ⛔ Пока userId не загрузился, ничего не показываем
    if (!userId || hasAccess === null) return null;
  
    return (
      <img
        src={buttonPartners}
        alt="Partners"
        className="headerButtonPartners"
        onClick={handleClick}
      />
    );
  };

export default PartnerButton;