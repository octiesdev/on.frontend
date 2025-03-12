import React, { useState} from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Onexs.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import tonIMG from "../assets/ton-img.png";
import onexIMG from "../assets/onex-circle.png";
import Footer from "../Footer"; // Подключаем футер

const Onexs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    
    // Проверяем, поддерживается ли вибрация
    if (navigator.vibrate) {
      navigator.vibrate(600); // Вибрация на 50 мс
    }
  };

  return (
    <div className="App">
      {/* Фон */}
      <div className="ONEXs_Window">   
        <div className="Header">  
          <div className="HeaderLogoContainer">  
            <img src={logo} alt="Logo" className="headerlogo" onClick={() => navigate("/tasks")}></img>
          </div>
            <div className="HeaderButtonsContainer">  
              <img src={buttonPartners} alt="" className="headerButtonPartners" onClick={() => navigate("/ambasProgram")}></img>
              <img src={buttonConnectWallet} alt="" className="headerConnectWalletConnected"/>
            </div>
        </div>
        <div className="mainTasksPageContainer">  
          <div className="info-onexs-block"> 
            <div className="info-onexs-nameText"> 
              <h2>ONEXs</h2>
              <p>Активация ONEX’s позволяет заработать<br/>TON, ONEX и др. криптовалюты.</p>
                <div className="section-buttons">
                  <button className={`all-button ${selectedCategory === "all" ? "active" : ""}`}
                    onClick={() => handleButtonClick("all")}>
                      Все
                  </button>
                  <button className={`my-button ${selectedCategory === "my" ? "active" : ""}`}
                    onClick={() => handleButtonClick("my")}>
                      Мои
                  </button>
                  <button className={`limited-button ${selectedCategory === "limited" ? "active" : ""}`}
                    onClick={() => handleButtonClick("limited")}>
                      Ограниченные
                  </button>
                </div> 
            </div>
          </div>
          
          {selectedCategory === "all" && (
          <>
          <div className="onex-node all"> 
            <div className="info-onexs-nameText"> 
              <div className="info-section-logo"> 
                <div className="ton-onex-logo"> 
                  <img src={tonIMG}/>
                  <h2>TON</h2>
                  <img src={onexIMG}/>
                  <h2>ONEX</h2>
                </div>
                <div className="number-OnexNode"> 
                  <h2>01</h2>
                </div>
              </div>
              <div className="onexNode-infoBlocks">
                <div className="first-onexNode-infoBlock">
                  <div className="farming-time-block">
                    <div className="farming-time-block-MainText">
                      Период фарминга
                    </div>
                    <div className="farming-time-block-Description">
                      3 дня
                    </div>
                  </div>
                  <div className="apy-info-block">
                    <div className="farming-time-block-MainText">
                        APY
                      </div>
                      <div className="farming-time-block-Description">
                        10%
                    </div>
                  </div>  
                </div>
                <div className="single-onexNode-infoBlock">
                  <div className="rewardInTon-block">
                    <div className="farming-time-block-MainText">
                        Награда в TON
                      </div>
                      <div className="farming-time-block-Description">
                        5.5 TON
                        <img src={tonIMG}/>
                    </div>
                  </div>
                  <div className="rewardInOnex-block">
                    <div className="farming-time-block-MainText">
                        Награда в ONEX
                      </div>
                      <div className="farming-time-block-Description">
                        10 ONEX
                        <img src={onexIMG}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onexNode-PayButton">
                <div className="pay-button">
                  ЗАПУСТИТЬ ЗА 10 TON
                </div>
              </div>
            </div>
          </div>
          <div className="onex-node all"> 
            <div className="info-onexs-nameText"> 
              <div className="info-section-logo"> 
                <div className="ton-onex-logo"> 
                  <img src={tonIMG}/>
                  <h2>TON</h2>
                  <img src={onexIMG}/>
                  <h2>ONEX</h2>
                </div>
                <div className="number-OnexNode"> 
                  <h2>02</h2>
                </div>
              </div>
              <div className="onexNode-infoBlocks">
                <div className="first-onexNode-infoBlock">
                  <div className="farming-time-block">
                    <div className="farming-time-block-MainText">
                      Период фарминга
                    </div>
                    <div className="farming-time-block-Description">
                      3 дня
                    </div>
                  </div>
                  <div className="apy-info-block">
                    <div className="farming-time-block-MainText">
                        APY
                      </div>
                      <div className="farming-time-block-Description">
                        10%
                    </div>
                  </div>  
                </div>
                <div className="single-onexNode-infoBlock">
                  <div className="rewardInTon-block">
                    <div className="farming-time-block-MainText">
                        Награда в TON
                      </div>
                      <div className="farming-time-block-Description">
                        5.5 TON
                        <img src={tonIMG}/>
                    </div>
                  </div>
                  <div className="rewardInOnex-block">
                    <div className="farming-time-block-MainText">
                        Награда в ONEX
                      </div>
                      <div className="farming-time-block-Description">
                        10 ONEX
                        <img src={onexIMG}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onexNode-PayButton">
                <div className="pay-button">
                  ЗАПУСТИТЬ ЗА 5 TON
                </div>
              </div>
            </div>
          </div>
          <div className="onex-node-last all"> 
            <div className="info-onexs-nameText"> 
              <div className="info-section-logo"> 
                <div className="ton-onex-logo"> 
                  <img src={tonIMG}/>
                  <h2>TON</h2>
                  <img src={onexIMG}/>
                  <h2>ONEX</h2>
                </div>
                <div className="number-OnexNode"> 
                  <h2>03</h2>
                </div>
              </div>
              <div className="onexNode-infoBlocks">
                <div className="first-onexNode-infoBlock">
                  <div className="farming-time-block">
                    <div className="farming-time-block-MainText">
                      Период фарминга
                    </div>
                    <div className="farming-time-block-Description">
                      3 дня
                    </div>
                  </div>
                  <div className="apy-info-block">
                    <div className="farming-time-block-MainText">
                        APY
                      </div>
                      <div className="farming-time-block-Description">
                        10%
                    </div>
                  </div>  
                </div>
                <div className="single-onexNode-infoBlock">
                  <div className="rewardInTon-block">
                    <div className="farming-time-block-MainText">
                        Награда в TON
                      </div>
                      <div className="farming-time-block-Description">
                        5.5 TON
                        <img src={tonIMG}/>
                    </div>
                  </div>
                  <div className="rewardInOnex-block">
                    <div className="farming-time-block-MainText">
                        Награда в ONEX
                      </div>
                      <div className="farming-time-block-Description">
                        10 ONEX
                        <img src={onexIMG}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onexNode-PayButton">
                <div className="pay-button">
                  ЗАПУСТИТЬ ЗА 5 TON
                </div>
              </div>
            </div>
        </div>
        </>
        )}

            {/* 🔥 Фильтрация блоков по выбранной категории */}
            {(selectedCategory === "my") && (
            <>
            <div className="onex-node-my my">
            <div className="info-onexs-nameText"> 
              <div className="info-section-logo"> 
                <div className="ton-onex-logo"> 
                  <img src={tonIMG}/>
                  <h2>TON</h2>
                  <img src={onexIMG}/>
                  <h2>ONEX</h2>
                </div>
                <div className="number-OnexNode"> 
                  <h2>01</h2>
                </div>
              </div>
              <div className="onexNode-infoBlocks">
                <div className="first-onexNode-infoBlock">
                  <div className="farming-time-block">
                    <div className="farming-time-block-MainText">
                      Период фарминга
                    </div>
                    <div className="farming-time-block-Description">
                      3 дня
                    </div>
                  </div>
                  <div className="apy-info-block">
                    <div className="farming-time-block-MainText">
                        APY
                      </div>
                      <div className="farming-time-block-Description">
                        10%
                    </div>
                  </div>  
                </div>
                <div className="single-onexNode-infoBlock">
                  <div className="rewardInTon-block">
                    <div className="farming-time-block-MainText">
                        Награда в TON
                      </div>
                      <div className="farming-time-block-Description">
                        5.5 TON
                        <img src={tonIMG}/>
                    </div>
                  </div>
                  <div className="rewardInOnex-block">
                    <div className="farming-time-block-MainText">
                        Награда в ONEX
                      </div>
                      <div className="farming-time-block-Description">
                        10 ONEX
                        <img src={onexIMG}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onexNode-PayButton">
                <div className="pay-button">
                  ЗАПУСТИТЬ ЗА 10 TON
                </div>
              </div>
            </div>
          </div>
          </>
          )}

          {(selectedCategory === "limited") && (
          <>
            <div className="onex-node-limited limited">
           <div className="info-onexs-nameText"> 
              <div className="info-section-logo"> 
                <div className="ton-onex-logo"> 
                  <img src={tonIMG}/>
                  <h2>TON</h2>
                  <img src={onexIMG}/>
                  <h2>ONEX</h2>
                </div>
                <div className="number-OnexNode"> 
                  <h2>01</h2>
                </div>
              </div>
              <div className="onexNode-infoBlocks">
                <div className="first-onexNode-infoBlock">
                  <div className="farming-time-block">
                    <div className="farming-time-block-MainText">
                      Период фарминга
                    </div>
                    <div className="farming-time-block-Description">
                      3 дня
                    </div>
                  </div>
                  <div className="apy-info-block">
                    <div className="farming-time-block-MainText">
                        APY
                      </div>
                      <div className="farming-time-block-Description">
                        10%
                    </div>
                  </div>  
                </div>
                <div className="single-onexNode-infoBlock">
                  <div className="rewardInTon-block">
                    <div className="farming-time-block-MainText">
                        Награда в TON
                      </div>
                      <div className="farming-time-block-Description">
                        5.5 TON
                        <img src={tonIMG}/>
                    </div>
                  </div>
                  <div className="rewardInOnex-block">
                    <div className="farming-time-block-MainText">
                        Награда в ONEX
                      </div>
                      <div className="farming-time-block-Description">
                        10 ONEX
                        <img src={onexIMG}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onexNode-PayButton">
                <div className="pay-button">
                  ЗАПУСТИТЬ ЗА 10 TON
                </div>
              </div>
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

export default Onexs;