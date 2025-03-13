import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TonConnectButton, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import Footer from "../Footer"; // Подключаем футер
import onexIMG from "../assets/onex-circle.png";
import blumIMG from "../assets/blum-circle.png";
import pawsIMG from "../assets/paws-circle.png";
import terminalIMG from "../assets/terminal-circle.png";
import tonIMG from "../assets/ton-img.png";
import rubIMG from "../assets/rub-icon.png";
import depoIMG from "../assets/deposit-icon.png";
import withIMG from "../assets/withdraw-icon.png";
import dollarIMG from "../assets/dollar-img.png";
import receiveIMG from "../assets/receive-icon.png";
import onexlogoIMG from "../assets/onex-img-all.png";

const Profile = () => {
    // Состояние для переключения между разделами
    const [activeSection, setActiveSection] = useState("default");
    const [amount, setAmount] = useState("5"); // Минимальная сумма 5 TON
    const [isAmountValid, setIsAmountValid] = useState(true); // Проверка минимальной суммы

    const navigate = useNavigate();
    console.log("navigate function:", navigate);

    const handleSupportClick = () => {
      window.open("https://t.me/zustrich_lab_hr", "_blank");
    };

    // ✅ Перемещение курсора в конец
    const moveCursorToEnd = (element) => {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    };

    // ✅ Фиксация введенного значения (при нажатии Enter или клике вне поля)
    const finalizeAmount = (e) => {
      let newValue = e.target.textContent.trim();

      if (newValue === "" || parseInt(newValue) < 5) {
          e.target.textContent = "5"; // Сбрасываем на 5, если пусто или меньше 5
          setAmount("5");
          setIsAmountValid(true);
      } else {
          setAmount(newValue);
          setIsAmountValid(true);
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
                <span className="text-in-rectangle">385.57</span>
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
                  onFocus={(e) => {
                      if (amount === "СУММА") {
                          setAmount(""); // Очищаем поле при фокусе
                      }
                      moveCursorToEnd(e.target);
                  }}
                  onInput={(e) => {
                      let newValue = e.target.textContent.replace(/[^0-9]/g, ""); // ❌ Оставляем только числа (0-9)
                      
                      if (newValue === "") {
                          setAmount("СУММА"); // Возвращаем "СУММА", если поле пустое
                          setIsAmountValid(true); // Не выделяем ошибку
                      } else {
                          setAmount(newValue);
                          setIsAmountValid(parseInt(newValue) >= 5);
                      }

                      e.target.textContent = newValue || "СУММА"; // Вставляем изменённый текст
                      moveCursorToEnd(e.target);
                  }}
                  onBlur={(e) => {
                      if (amount === "" || amount === "СУММА") {
                          setAmount("СУММА"); // Если поле пустое, возвращаем "СУММА"
                      } else if (parseInt(amount) < 5) {
                          setIsAmountValid(false); // Подсвечиваем ошибку
                      }
                  }}
                  onKeyDown={(e) => {
                      if (e.key === "Enter") {
                          e.preventDefault();
                          finalizeAmount(e);
                          e.target.blur();
                      }
                  }}
                >
                    {amount}
              </div>
                  <div className="rectangle-buttonDepo-depoSection">
                    ПОПОЛНИТЬ
                  </div>
                </div>
                <div className="number-OnexNode-deposit-block"> 
                  <h2>02</h2>
                </div>
                <div className="rectangle-for-text-deposit-block"> 
                  <p>1. Подключите кошелек (в правом верхнем <br/> углу экрана) перед внесением депозита.</p>
                  <p style={{ color: isAmountValid ? "white" : "red" }}>
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
                  <div className="rectangle-buttonDepo-depoSection">
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

