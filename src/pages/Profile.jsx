import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TonConnectButton, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { beginCell, toNano } from "@ton/core";
import { useUser } from "../UserContext"; // 🔥 Используем глобальный контекст
import PartnerButton from "../pages/PartnerButton";
import "../styles/Profile.css";


import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import Footer from "../Footer"; // Подключаем футер
import tonIMG from "../assets/ton-img.png";
import depoIMG from "../assets/deposit-icon.png";
import withIMG from "../assets/withdraw-icon.png";
import dollarIMG from "../assets/dollar-img.png";
import receiveIMG from "../assets/receive-icon.png";
import onexlogoIMG from "../assets/onex-img-all.png";

const API_URL = "https://1xback-production.up.railway.app"; 

const Profile = () => {
    const { userId, balance, fetchBalance } = useUser(); 
    const [activeSection, setActiveSection] = useState("default");

    const [amount, setAmount] = useState("СУММА");
    const [isNeutral, setIsNeutral] = useState(true); 
    const [isValidAmount, setIsValidAmount] = useState(false); 

    const [withdrawAmount, setWithdrawAmount] = useState("СУММА");
    const [isValidWithdraw, setIsValidWithdraw] = useState(false);
    const [withdrawHistory, setWithdrawHistory] = useState([]);

    const [tonConnectUI] = useTonConnectUI();
    const walletAddress = useTonAddress(); 

    const [farmStatus, setFarmStatus] = useState("не активирована");
    const [timeLeft, setTimeLeft] = useState("");

    const [availableNodes, setAvailableNodes] = useState(100); // ✅ Количество доступных нод

    const [tonToUsdRate, setTonToUsdRate] = useState(null); // ✅ Курс TON → USD

    const [depositHistory, setDepositHistory] = useState([]);

    
    const navigate = useNavigate();

    useEffect(() => {
      if (!userId) return;
    
      fetch(`${API_URL}/get-deposit-history?userId=${userId}`)
        .then(res => res.json())
        .then(data => setDepositHistory(data.history || []))
        .catch(err => console.error("❌ Ошибка загрузки истории:", err));
    }, [userId]);

    useEffect(() => {
      if (userId && walletAddress) {
          updateWalletAddress(userId, walletAddress); 
      }
    }, [userId, walletAddress]);
    

    useEffect(() => {
      if (userId) {
        console.log("✅ userId найден:", userId);
        checkFarmingStatus();
      } else {
        console.error("❌ userId отсутствует!");
      }
    }, [userId]);

    const fetchTonToUsdRate = async () => {
      try {
        const response = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=TONUSDT");
    
        if (!response.ok) {
          throw new Error(`Ошибка запроса: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("📌 Binance API ответ:", data);
    
        if (data && data.price) {
          setTonToUsdRate(parseFloat(data.price)); // ✅ Конвертируем в число
        } else {
          console.error("❌ Binance API не вернул курс TON/USD:", data);
        }
      } catch (error) {
        console.error("❌ Ошибка при загрузке курса TON/USD:", error);
      }
    };

    useEffect(() => {
      fetchTonToUsdRate();
    }, []); // ✅ Загружаем курс при первом рендере
    
    // ✅ Запрос на сервер для получения доступных нод
    const fetchAvailableNodes = async () => {
      try {
        const response = await fetch(`${API_URL}/get-available-nodes`);
        const data = await response.json();

        if (response.ok) {
          setAvailableNodes(data.availableNodes); // ✅ Обновляем состояние
        } else {
          console.error("❌ Ошибка при получении доступных нод:", data.error);
        }
      } catch (error) {
        console.error("❌ Ошибка при загрузке нод:", error);
      }
    };

    // ✅ Запрашиваем количество нод при загрузке страницы
    useEffect(() => {
      fetchAvailableNodes();
    }, []);

    const checkFarmingStatus = async () => {
      try {
        const response = await fetch(`${API_URL}/get-farming-status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
    
        const data = await response.json();
        console.log("📌 Ответ сервера:", data);
    
        if (data.success) {
          if (data.status === "зафармлено") {
            setFarmStatus("зафармлено");
            fetchBalance(userId); // ✅ Обновляем баланс
          } else if (data.status === "таймер") {
            setFarmStatus("таймер");
            startCountdown(data.farmEndTime);
          }
        } else {
          console.error("❌ Ошибка: Сервер вернул:", data.error);
        }
      } catch (error) {
        console.error("❌ Ошибка при проверке статуса фарминга:", error);
      }
    };
    
    const startCountdown = (endTime) => {
      const interval = setInterval(() => {
        const now = new Date();
        const diff = new Date(endTime) - now;
    
        if (diff <= 0) {
          clearInterval(interval);
          setFarmStatus("зафармлено");
        } else {
          const seconds = Math.floor(diff / 1000);
          setTimeLeft(`${seconds}`);
        }
      }, );
    };
    
    const startFarming = async () => {
      try {
        const response = await fetch(`${API_URL}/start-farming`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
    
        const data = await response.json();
        if (data.success) {
          setFarmStatus("таймер");
          startCountdown(data.farmEndTime);
    
          // ✅ Обновляем количество нод после запуска
          fetchAvailableNodes();
        } else {
          console.error("❌ Ошибка:", data.error);
        }
      } catch (error) {
        console.error("❌ Ошибка при запуске фарминга:", error);
      }
    };

    const updateWalletAddress = async (userId, wallet) => {
      try {
          console.log(`📌 Сохранение кошелька ${wallet} для userId: ${userId}`);
            const response = await fetch("https://1xback-production.up.railway.app/update-wallet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId, walletAddress: wallet })
            });

            const data = await response.json();
            if (response.ok) {
                console.log("✅ Кошелек успешно сохранен:", data);
            } else {
                console.error("❌ Ошибка при сохранении кошелька:", data.error);
            }
        } catch (error) {
          console.error("❌ Ошибка при обновлении кошелька:", error);
        }
    };



    useEffect(() => {
      if (userId) {
          fetchBalance(userId);
      } else {
          console.error("❌ Ошибка: userId отсутствует!");
      }
    }, [userId]);

    useEffect(() => {
      if (farmStatus === "зафармлено" && userId) {
        console.log("🎉 Фарминг завершен! Обновляем баланс...");
    
        setTimeout(() => {
          fetchBalance(userId); // 🔥 Первый запрос
        }, ); // ✅ Ждем 1 секунду (чтобы сервер точно обновил баланс)
    
        setTimeout(() => {
          fetchBalance(userId); // 🔥 Второй запрос для надежности
        }, ); // ✅ Через 3 секунды проверяем еще раз
      }
    }, [farmStatus, userId]); // 🔥 Следим за farmStatus и userId

    const handleSupportClick = () => {
      window.open("https://t.me/zustrich_lab_hr", "_blank");
    };

    const moveCursorToEnd = (element) => {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(false); // Устанавливаем курсор в конец
      selection.removeAllRanges();
      selection.addRange(range);
    };


    const sendTransaction = async (amountToSend, comment) => {
      try {
        if (!userId) {
            console.error("❌ Ошибка: userId отсутствует!");
            return;
          }

          const amountInNanoTON = toNano(amountToSend).toString();
          const destinationAddress = "0QBkLTS-N_Cpr4qbHMRXIdVYhWMs3dQVpGSQEl44VS3SNwNs";

          const payloadCell = beginCell()
          .storeUint(0, 32)  
          .storeStringTail(`deposit:${userId}`) // ✅ Передаем `userId` из контекста
          .endCell();
  
          const transaction = {
              validUntil: Math.floor(Date.now() / 1000) + 600,
              messages: [
                  {
                      address: destinationAddress,
                      amount: amountInNanoTON,
                      payload: payloadCell.toBoc().toString("base64") // Кодируем в Base64
                  },
              ],
          };
  
          console.log("📌 Отправка транзакции с payload:", transaction);
          await tonConnectUI.sendTransaction(transaction);
          console.log(`✅ Транзакция с комментарием "${comment}" отправлена!`);
          
      } catch (error) {
          console.error("❌ Ошибка при отправке транзакции:", error.message || error);
      }
    };

    const handleWithdraw = async () => {
      if (!isValidWithdraw || withdrawAmount === "СУММА") return;
    
      const value = parseFloat(withdrawAmount);
    
      try {
        const response = await fetch(`${API_URL}/create-withdraw-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            amount: value,
          }),
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.error || "Ошибка сервера");
        }
    
        // Обновим баланс после успешного создания ордера
        await fetchBalance(userId);
    
        // Добавим новый ордер в историю (опционально: можно сделать get-withdraw-history)
        setWithdrawHistory(prev => [
          {
            amount: value.toFixed(2),
            status: "в обработке", // 🔥 На фронте показываем, пока не обновится
            createdAt: new Date().toLocaleString(),
          },
          ...prev,
        ]);
    
        // Очистка
        setWithdrawAmount("СУММА");
        setIsValidWithdraw(false);
    
        console.log("✅ Запрос на вывод отправлен успешно");
      } catch (error) {
        console.error("❌ Ошибка при отправке запроса на вывод:", error.message);
        alert("Произошла ошибка при создании заявки на вывод.");
      }
    };

    useEffect(() => {
      if (!userId) return;
    
      fetch(`${API_URL}/get-withdraw-orders?userId=${userId}`)
        .then(res => res.json())
        .then(data => setWithdrawHistory(data.orders || []))
        .catch(err => console.error("❌ Ошибка загрузки истории выводов:", err));
    }, [userId]);


  return (
    <div className="App">
      {/* Фон */}
      <div className="ONEXs_Window">   
        <div className="Header">  
          <div className="HeaderLogoContainer">  
            <img src={logo} alt="Logo" className="headerlogo"   
            onClick={() => {
              console.log("🔥 Лого кликнуто!");
              setActiveSection("default"); // ⬅ Сбрасываем состояние
              setTimeout(() => navigate("/"), 0); // ⬅ Ожидаем ререндер
            }}>
            </img>
          </div>
            <div className="HeaderButtonsContainer">  
              <PartnerButton />
              <TonConnectButton/>
            </div>
        </div>
        <div className="mainProfilePageContainer"> 
          <div className="info-profile-block"> 
            <div className="info-profile-nameText55"> 
              <div className="rectangle-info-profile">
                <h2>
                <span className="text-in-rectangle">{balance}</span>
                  <div className="rectangle-info-profile-ton">
                    TON
                  </div>
                </h2>
                <p>
                  ≈ {tonToUsdRate ? (balance * tonToUsdRate).toFixed(2) : "..."} $
                </p>
              </div>
              <div className="rectangle-for-buttons-profile">
                  <div className={`rectangle-buttons-depo ${activeSection === "deposit" ? "active" : ""}`}
                    onClick={() => setActiveSection("deposit")}>
                    <img src={depoIMG} className="buttons-icons" />
                    Ввод
                  </div>
                  <div className={`rectangle-buttons-with ${activeSection === "withdraw" ? "active" : ""}`}
                    onClick={() => setActiveSection("withdraw")}>
                    <img src={withIMG} className="buttons-icons"/>
                    Вывод
                  </div>
              </div>
            </div>
            <div className="info-profile-nameText45"> 
              <h2>01</h2>
              <img src={dollarIMG} className="dollar-icon"/>
            </div>
          </div>

        {/* Если showDepositSection = false, показываем текст и onex-node */}
        {activeSection === "default" && (
            <>
          <div className="info-onex-block"> 
            <div className="info-onex-nameText40"> 
              <div className="rectangle-info-onex">
                <h2>
                  <span className="text-in-rectangle2">08</span>
                  <div className="rectangle-info-onex-onex">
                    ONEX
                  </div>
                </h2>
              </div>
              <div className="rectangle-for-button-onex">
                <div className="rectangle-buttons-receive" onClick={() => navigate("/tasks")}>
                  <img src={receiveIMG} className="receive-button-icon"/>
                  Получить
                </div>
              </div>
            </div>
            <div className="info-onex-nameText60"> 
              <h2>02</h2>
              <img src={onexlogoIMG} className="onex-logo-icon"/>
            </div>
            </div>
              <div className="text-avaliable-drop">
                ДОСТУПНЫЙ ДРОП
              </div>
              <div className="onex-node"> 
                <div className="info-onexs-nameText"> 
                  <div className="info-section-logo"> 
                    <div className="ton-onex-logo"> 
                      <img src={tonIMG}/>
                      <h2>TON</h2>
                    </div>
                    <div className="number-OnexNode"> 
                      <h2>03</h2>
                    </div>
                  </div>
                  <div className="onexNode-infoBlocks">
                    <div className="first-onexNode-infoBlock">
                      <div className="farming-time-block">
                        <div className="farming-time-block-MainText2">
                          Период фарминга
                        </div>
                        <div className="farming-time-block-Description2">
                          3 дня
                        </div>
                      </div>
                      <div className="avaliable-onex-info-block">
                        <div className="farming-time-block-MainText2">
                          Доступно ONEX's
                        </div>
                        <div className="farming-time-block-Description2">
                          <span className="highlight-text">{availableNodes}</span>/100
                        </div>
                      </div>  
                    </div>
                    <div className="single-onexNode-infoBlock">
                      <div className={`rewardInTon-block ${farmStatus === "зафармлено" ? "reward-farmed" : ""}`}>
                        <div className="farming-time-block-MainText2">
                          Награда в TON
                        </div>
                        <div className="farming-time-block-Description2">
                          +1 TON
                          <img src={tonIMG}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="onexNode-PayButton">
                    {farmStatus === "таймер" && (
                      <div className="pay-button-profile">
                        {timeLeft}
                      </div>
                    )}

                    {/* ✅ Если у пользователя завершился фарминг, показываем кнопку "ЗАФАРМЛЕНО" */}
                    {farmStatus === "зафармлено" && (
                      <div className="pay-button-profile-farmed">
                        ЗАФАРМЛЕНО
                      </div>
                    )}

                    {/* ✅ Если у пользователя нет активного фарминга и доступны ноды */}
                    {farmStatus === "не активирована" && availableNodes > 0 && (
                      <div className="pay-button-profile" onClick={startFarming}>
                        ЗАПУСТИТЬ БЕСПЛАТНО
                      </div>
                    )}

                    {/* ✅ Если у пользователя нет активного фарминга и нет доступных нод */}
                    {farmStatus === "не активирована" && availableNodes === 0 && (
                      <div className="pay-button-profile-nonAvaliable">
                        НЕТ ДОСТУПНЫХ ONEX’s
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "deposit" && (
            <>
            <div className="deposit-block">
              <div className="info-deposit-nameText100">
                <div className="rectangle-for-buttons-deposit-block">
                <div
                  className="rectangle-button-amount"
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  spellCheck={false} // ❌ Отключаем проверку орфографии
                  onFocus={(e) => {
                      if (amount === "СУММА") setAmount(""); // Очищаем поле при фокусе
                      moveCursorToEnd(e.target);
                  }}
                  onInput={(e) => {
                    let newValue = e.target.textContent.replace(/\D/g, ""); // Оставляем только цифры
                
                    if (!newValue) {
                        setAmount(""); 
                        setIsValidAmount(false); // ❌ Число меньше 5 - невалидное
                        setIsNeutral(true); // 🔥 Возвращаем нейтральное состояние
                    } else {
                        const isValid = parseInt(newValue) >= 2;
                        setIsValidAmount(isValid);
                        setIsNeutral(false); // ❌ Убираем нейтральное состояние
                    }
                
                    setAmount(newValue);
                    e.target.textContent = newValue;
                    moveCursorToEnd(e.target);
                }}
                  onBlur={(e) => {
                      if (!e.target.textContent.trim()) {
                          setAmount("СУММА"); // 🔥 Если поле пустое, вернуть "СУММА"
                          setIsValidAmount(false);
                          e.target.blur(); // 🔥 Явно убираем фокус, если поле пустое
                      }
                  }}
                  onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          e.preventDefault();
                          e.target.blur(); // 🔥 Закрываем редактирование при нажатии Enter
                      }
                  }}>
                    {amount}
                </div>
                <div className={`rectangle-buttonDepo-depoSection ${isNeutral ? "neutral" : isValidAmount ? "valid" : ""}`}
                    onClick={() => {
                      if (isValidAmount) {
                          console.log("🔥 Вызов sendTransaction с userId:", userId);
                          sendTransaction(amount, `deposit:${userId}`);
                      }
                  }}>
                  ПОПОЛНИТЬ
                </div>
                </div>
                <div className="number-OnexNode-deposit-block"> 
                  <h2>02</h2>
                </div>
                <div className="rectangle-for-text-deposit-block"> 
                  <p>1. Подключите кошелек (в правом верхнем <br/> углу экрана) перед внесением депозита.</p>
                  <p className={`minimum-deposit-text ${isNeutral ? "neutral" : !isValidAmount ? "error" : ""}`}>
                    2. Минимальный депозит 5 TON.
                  </p>
                  <p>3. Обработка депозита может занимать до <br/> нескольких минут.</p>
                </div>
              </div>
            </div>

            {depositHistory.map((entry, idx) => (
              <div key={idx} className="rectangle-deposit-history" style={{ marginTop: idx === 0 ? "2.8vh" : "1.4vh" }}>
                  <div className="rectangle-deposit-title">
                    <div className="rectangle-deposit-title-MainText">
                      ВВОД
                    </div>
                    <div className="rectangle-deposit-title-Description2">
                      выполнен
                    </div>
                  </div>
                <div className="rectangle-deposit-info">
                  {entry.amount} TON <img src={tonIMG} />
                </div>
              </div>
            ))}

            <div className="rectangle-support">
              В случае каких-либо проблем с депозитом, обращайтесь в тех. поддержку.
              <div className="rectangle-button-support" onClick={handleSupportClick}>
                ТЕХ.ПОДДЕРЖКА
              </div>
            </div>
            </>
          )}

          {activeSection === "withdraw" && (
            <>
            <div className="deposit-block">
              <div className="info-deposit-nameText100">
                <div className="rectangle-for-buttons-deposit-block">
                <div
                  className="rectangle-button-amount"
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  spellCheck={false}
                  onFocus={(e) => {
                    if (withdrawAmount === "СУММА") setWithdrawAmount("");
                  }}
                  onInput={(e) => {
                    const input = e.target.textContent.replace(/\D/g, "");
                    const value = parseFloat(input);

                    setWithdrawAmount(input);
                    const isValid = value >= 1 && value <= parseFloat(balance);
                    setIsValidWithdraw(isValid);

                    moveCursorToEnd(e.target);
                  }}
                  onBlur={(e) => {
                    if (!e.target.textContent.trim()) {
                      setWithdrawAmount("СУММА");
                      setIsValidWithdraw(false);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      e.target.blur();
                    }
                  }}
                >
                  {withdrawAmount}
                </div>
                  <div 
                    className={`rectangle-buttonWith-withSection ${isValidWithdraw ? "valid" : ""}`}
                    onClick={handleWithdraw}
                  >
                    ВЫВЕСТИ
                  </div>
                </div>
                <div className="number-OnexNode-deposit-block"> 
                  <h2>02</h2>
                </div>
                <div className="rectangle-for-text-deposit-block"> 
                  <p>1. Подключите кошелек (в правом верхнем <br/> углу экрана) перед внесением депозита.</p>
                  <p className={`${!isValidWithdraw && withdrawAmount !== "СУММА" ? "error" : ""}`}>
                    2. Обработка вывода может занимать до 24 часов. 
                  </p>
                  <p>3. Минимальная сумма вывода 1 TON.</p>
                </div>
              </div>
            </div>

            {withdrawHistory.map((entry, idx) => (
              <div
                key={idx}
                className={`rectangle-deposit-history order-status ${entry.status === "в обработке" ? "processing" : entry.status === "выполнен" ? "completed" :  "rejected"}`}
                style={{ marginTop: idx === 0 ? "2.8vh" : "1.4vh" }}
              >
                <div className="rectangle-deposit-title">
                  <div className="rectangle-deposit-title-MainText">ВЫВОД</div>
                  <div className="rectangle-deposit-title-Description">{entry.status}</div>
                </div>
                <div className="rectangle-deposit-info">
                  {entry.amount} TON <img src={tonIMG} />
                </div>
              </div>
            ))}

            <div className="rectangle-support">
              В случае каких-либо проблем с выводом, обращайтесь в тех. поддержку.
              <div className="rectangle-button-support" onClick={handleSupportClick}>
                ТЕХ.ПОДДЕРЖКА
              </div>
            </div>
            </>
          )}


        </div>
      </div>
       {/* Футер */}
       <Footer />
    </div>
  );
};

export default Profile;