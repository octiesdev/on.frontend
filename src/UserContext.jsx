import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [balance, setBalance] = useState("0.00");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://1xback-production.up.railway.app/get-user");
      const data = await response.json();

      if (response.ok && data?.userId) {
        setUserId(data.userId);
        fetchBalance(data.userId);
      } else {
        console.warn("❌ userId отсутствует в ответе сервера:", data);
      }
    } catch (error) {
      console.error("Ошибка при получении userId:", error);
    }
  };

  const fetchBalance = async (id) => {
    if (!id) return; // ✅ Защита от вызова с `null`
    
    try {
      const response = await fetch(`https://1xback-production.up.railway.app/get-balance?userId=${id}`);
      const data = await response.json();

      if (response.ok && typeof data.balance === "number") {
        setBalance(parseFloat(data.balance).toFixed(2));
      } else {
        console.warn("❌ Некорректный баланс:", data);
      }
    } catch (error) {
      console.error("Ошибка при получении баланса:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userId, balance, fetchBalance }}>
      {userId !== null ? children : <div>Загрузка...</div>}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};