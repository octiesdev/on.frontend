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
    fetch(`https://1xback-production.up.railway.app/get-ambassador-data?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        setHasAccess(data.hasAccess);
      })
      .catch(err => {
        console.error("❌ Ошибка при проверке ambassador-доступа:", err);
      });
  }, [userId]);

  const handleClick = () => {
    if (hasAccess === null) return;
    navigate(hasAccess ? "/onambasprogram" : "/ambasprogram");
  };

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