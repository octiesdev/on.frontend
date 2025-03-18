import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [balance, setBalance] = useState("0.00");


  useEffect(() => {
    initializeUser();
  }, []);

  const initializeUser = async () => {
    // ✅ Проверяем, есть ли `userId` в URL
    let id = new URLSearchParams(window.location.search).get("userId");

    // ✅ Если нет в URL, проверяем `sessionStorage`
    if (!id) {
      id = sessionStorage.getItem("userId");
    }

    if (id) {
      console.log(`✅ Найден userId: ${id}`);
      setUserId(id);
      fetchBalance(id);
    } else {
      console.error("❌ Ошибка: userId отсутствует!");
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