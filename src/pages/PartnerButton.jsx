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
    const fetchAccess = async () => {
      try {
        const res = await fetch(`https://1xback-production.up.railway.app/get-ambassador-data?userId=${userId}`);
        const data = await res.json();
        setHasAccess(data.hasAccess);
      } catch (err) {
        console.error("❌ Ошибка при проверке ambassador-доступа:", err);
        setHasAccess(false); // default to false on error
      }
    };
    fetchAccess();
  }, [userId]);

  const handleClick = () => {
    if (hasAccess === null) return; // prevent navigation while loading
    navigate(hasAccess ? "/onambasprogram" : "/ambasprogram");
  };

  if (hasAccess === null) return null;

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