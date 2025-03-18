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
      if (!window.Telegram) {
        console.error("❌ Telegram WebApp SDK не загружен!");
        return;
      }

      const tg = window.Telegram.WebApp;
      const telegramId = tg?.initDataUnsafe?.user?.id;

      if (telegramId) {
        console.log("✅ `userId` из Telegram.WebApp:", telegramId);
        setUserId(telegramId);

        // 🔥 Отправляем `telegramId` на бэкенд для регистрации (если его там нет)
        await registerUser(telegramId);
        
        // Загружаем баланс
        fetchBalance(telegramId);
        return;
      }

      console.log("🔄 `userId` не найден в WebApp, загружаем с сервера...");
      const response = await fetch("https://1xback-production.up.railway.app/get-user", {
        headers: telegramId ? { "x-telegram-id": telegramId } : {} // 🔥 Передаем заголовок, только если есть ID
      });

      if (!response.ok) {
        throw new Error(`❌ Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();
      if (data.userId) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telegramId })
      });

      if (!response.ok) {
        throw new Error(`❌ Ошибка при регистрации: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Пользователь зарегистрирован или уже существует:", data);
    } catch (error) {
      console.error("❌ Ошибка при отправке `telegramId` на сервер:", error);
    }
  };

  const fetchBalance = async (id) => {
    try {
      const response = await fetch(`https://1xback-production.up.railway.app/get-balance?userId=${id}`);
      if (!response.ok) {
        throw new Error(`❌ Ошибка при получении баланса: ${response.status}`);
      }

      const data = await response.json();
      if (data.balance !== undefined) {
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