import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TonConnectButton, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { beginCell } from "@ton/core"; 
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import Footer from "../Footer"; // Подключаем футер
import tonIMG from "../assets/ton-img.png";
import rubIMG from "../assets/rub-icon.png";
import depoIMG from "../assets/deposit-icon.png";
import withIMG from "../assets/withdraw-icon.png";
import dollarIMG from "../assets/dollar-img.png";
import receiveIMG from "../assets/receive-icon.png";
import onexlogoIMG from "../assets/onex-img-all.png";

const API_URL = "https://1xback-production.up.railway.app"; 

const Profile = () => {

    const [activeSection, setActiveSection] = useState("default");
    const [balance, setBalance] = useState("0.00"); // 🔥 Храним баланс
    const [amount, setAmount] = useState("СУММА");
    const [isNeutral, setIsNeutral] = useState(true); // ✅ Начальное нейтральное состояние
    const [isValidAmount, setIsValidAmount] = useState(false); // ❌ Не валидное изначально 

    const navigate = useNavigate();
    const userWalletAddress = useTonAddress(); // Получаем адрес кошелька пользователя

    const [tonConnectUI] = useTonConnectUI();

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

    useEffect(() => {
      setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("userId");
    
        console.log("📌 userId из URL после задержки:", id);
    
        if (id) {
          fetchBalance(id);
        } else {
          console.error("❌ Ошибка: userId не найден в URL!");
        }
      }, 500); 
    }, []);


    const fetchBalance = async () => {
      try {
          const userId = new URLSearchParams(window.location.search).get("userId"); // Получаем userId из URL
          if (!userId) return;

          const response = await fetch(`${API_URL}/get-balance?userId=${userId}`);
          const data = await response.json();

          if (response.ok && data.balance !== undefined) {
              setBalance(parseFloat(data.balance).toFixed(2)); // Устанавливаем баланс с округлением
          }
      } catch (error) {
          console.error("Ошибка при получении баланса:", error);
      }
    };


    useEffect(() => {
        fetchBalance();
    }, []);


    const encodeMemo = (text) => {
      const encoder = new TextEncoder();
      const encoded = encoder.encode(text);
      return btoa(String.fromCharCode(...encoded)); // Кодируем в Base64
    };
    
    const sendTransaction = async (amountToSend) => {
      try {
          const amountInNanoTON = (parseFloat(amountToSend) * 1e9).toFixed(0);
          const destinationAddress = "EQDmnxDMhId6v1Ofg_h5KR5coWlFG6e86Ro3pc7Tq4CA0-Jn";
  
          const userId = new URLSearchParams(window.location.search).get("userId") || "unknown";
  
          console.log("🔥 Вызов sendTransaction с amount:", amountToSend);
          console.log("🛠️ Создаю payload...");
  
          // ✅ Создаём payload
          const body = beginCell()
              .storeUint(0, 32) // 32-битный префикс
              .storeStringTail(`Deposit from user ${userId}`) // Комментарий
              .endCell();
  
          console.log("✅ Payload создан:", body);
  
          // Кодируем в base64 без использования Buffer
          const bocBuffer = body.toBoc();
          console.log("📌 BOC Buffer:", bocBuffer);
  
          // ✅ Гарантированное кодирование в base64
          const payloadBase64 = btoa(String.fromCharCode(...new Uint8Array(bocBuffer)));
  
          console.log("📌 Payload в base64:", payloadBase64);
  
          const transaction = {
              validUntil: Math.floor(Date.now() / 1000) + 600, // 10 минут
              messages: [
                  {
                      address: destinationAddress,
                      amount: amountInNanoTON,
                      payload: payloadBase64, // ✅ Теперь точно работает
                  },
              ],
          };
  
          console.log("📌 Отправка транзакции:", transaction);
          await tonConnectUI.sendTransaction(transaction);
          console.log(`✅ Транзакция на сумму ${amountToSend} TON успешно отправлена!`);
      } catch (error) {
          console.error("❌ Ошибка при отправке транзакции:", error);
      }
  };


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
              <img src={buttonPartners} alt="" className="headerButtonPartners" onClick={() => navigate("/ambasProgram")}></img>
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
                  ≈ 545.322.79
                  <img src={rubIMG}/>
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
                          <span className="highlight-text">99</span>/100
                        </div>
                      </div>  
                    </div>
                    <div className="single-onexNode-infoBlock">
                      <div className="rewardInTon-block">
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
                    <div className="pay-button-profile">
                      ЗАПУСТИТЬ БЕСПЛАТНО
                    </div>
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
                      console.log("🔥 Вызов sendTransaction с amount:", amount);
                      sendTransaction(amount);
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
                  <div className="rectangle-button-amount">
                    СУММА
                  </div>
                  <div className="rectangle-buttonWith-withSection">
                    ВЫВЕСТИ
                  </div>
                </div>
                <div className="number-OnexNode-deposit-block"> 
                  <h2>02</h2>
                </div>
                <div className="rectangle-for-text-deposit-block"> 
                  <p>1. Подключите кошелек (в правом верхнем <br/> углу экрана) перед внесением депозита.</p>
                  <p>2. Обработка вывода может занимать до 24 часов. </p>
                  <p>3. Минимальная сумма вывода 1 TON.</p>
                </div>
              </div>
            </div>
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