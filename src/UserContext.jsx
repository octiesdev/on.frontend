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
      const tg = window.Telegram?.WebApp;
      const initData = tg?.initData; // ✅ Получаем подписанные данные

      if (!initData) {
        console.error("❌ Ошибка: `initData` отсутствует!");
        return;
      }

      console.log("✅ `initData` получен:", initData);

      const response = await fetch("https://1xback-production.up.railway.app/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initData })
      });

      const data = await response.json();

      if (response.ok && data.userId) {
        console.log("✅ Получен userId:", data.userId);
        setUserId(data.userId);
        fetchBalance(data.userId);
      } else {
        console.error("❌ Ошибка при аутентификации:", data.error);
      }
    } catch (error) {
      console.error("❌ Ошибка при запросе userId:", error);
    }
  };

  const fetchBalance = async (id) => {
    try {
      console.log("📌 Запрос баланса для userId:", id);
      const response = await fetch(`https://1xback-production.up.railway.app/get-balance?userId=${id}`);
      const data = await response.json();

      if (response.ok && data.balance !== undefined) {
        setBalance(parseFloat(data.balance).toFixed(2));
      } else {
        console.error("❌ Ошибка: баланс отсутствует в ответе сервера!");
      }
    } catch (error) {
      console.error("❌ Ошибка при получении баланса:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userId, balance, fetchBalance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);