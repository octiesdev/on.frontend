import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") || null);
  const [balance, setBalance] = useState(sessionStorage.getItem("balance") || "0.00");

  // ✅ Загружаем `userId` при запуске
  useEffect(() => {
    if (!userId) {
      fetchUserData();
    } else {
      fetchBalance(userId);
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://1xback-production.up.railway.app/get-user");
      const data = await response.json();

      if (response.ok && data.userId) {
        setUserId(data.userId);
        sessionStorage.setItem("userId", data.userId); // 🔥 Сохраняем в sessionStorage
        fetchBalance(data.userId);
      } else {
        console.error("❌ Ошибка: userId отсутствует в ответе сервера!");
      }
    } catch (error) {
      console.error("❌ Ошибка при получении userId:", error);
    }
  };

  const fetchBalance = async (id) => {
    try {
      const response = await fetch(`https://1xback-production.up.railway.app/get-balance?userId=${id}`);
      const data = await response.json();

      if (response.ok && data.balance !== undefined) {
        const formattedBalance = parseFloat(data.balance).toFixed(2);
        setBalance(formattedBalance);
        sessionStorage.setItem("balance", formattedBalance); // 🔥 Сохраняем баланс
      }
    } catch (error) {
      console.error("❌ Ошибка при получении баланса:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userId, balance, fetchUserData, fetchBalance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);