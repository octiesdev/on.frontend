import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [balance, setBalance] = useState("0.00");

  useEffect(() => {
    fetchUserData(); // ✅ Получаем `userId` с сервера
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://1xback-production.up.railway.app/get-user"); // ✅ Запрос на сервер
      const data = await response.json();

      if (response.ok && data.userId) {
        setUserId(data.userId);
        fetchBalance(data.userId); // ✅ Запрашиваем баланс после получения `userId`
      }
    } catch (error) {
      console.error("Ошибка при получении userId:", error);
    }
  };

  const fetchBalance = async (id) => {
    try {
      const response = await fetch(`https://1xback-production.up.railway.app/get-balance?userId=${id}`);
      const data = await response.json();

      if (response.ok && data.balance !== undefined) {
        setBalance(parseFloat(data.balance).toFixed(2));
      }
    } catch (error) {
      console.error("Ошибка при получении баланса:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userId, balance, fetchBalance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);