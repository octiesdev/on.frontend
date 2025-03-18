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
      const telegramId = tg?.initDataUnsafe?.user?.id;

      if (telegramId) {
        console.log("✅ `userId` из Telegram.WebApp:", telegramId);
        setUserId(telegramId);
        await registerUser(telegramId); // ✅ Отправляем на бэкенд для создания (если нет)
        fetchBalance(telegramId);
        return;
      }

      console.log("🔄 `userId` не найден в WebApp, загружаем с сервера...");
      const response = await fetch("https://1xback-production.up.railway.app/get-user", {
        headers: { "x-telegram-id": telegramId || "" }
      });
      const data = await response.json();

      if (response.ok && data.userId) {
        setUserId(data.userId);
        fetchBalance(data.userId);
      } else {
        console.error("❌ Ошибка: userId отсутствует в ответе сервера!");
      }
    } catch (error) {
      console.error("❌ Ошибка при получении userId:", error);
    }
  };

  const registerUser = async (telegramId) => {
    try {
      const response = await fetch("https://1xback-production.up.railway.app/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ telegramId })
      });

      const data = await response.json();
      if (response.ok) {
        console.log("✅ Пользователь зарегистрирован или уже существует:", data);
      } else {
        console.error("❌ Ошибка при регистрации:", data.error);
      }
    } catch (error) {
      console.error("❌ Ошибка при отправке `telegramId` на сервер:", error);
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
    <UserContext.Provider value={{ userId, balance, fetchBalance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);