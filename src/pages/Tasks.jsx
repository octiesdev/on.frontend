import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { TonConnectButton, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { useUser } from "../UserContext"; // ✅ Добавь это
import { Link } from "react-router-dom";
import "../styles/Tasks.css";
import logo from "../assets/logo.png";
import buttonPartners from "../assets/buttonPartners.png";
import buttonConnectWallet from "../assets/buttonConnectWallet.png";
import Footer from "../Footer"; // Подключаем футер
import onexIMG from "../assets/onex-circle.png";
import blumIMG from "../assets/blum-circle.png";
import pawsIMG from "../assets/paws-circle.png";
import terminalIMG from "../assets/terminal-circle.png";
import tonIMG from "../assets/ton-img.png";



const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const { userId } = useUser();
  const [completedTasks, setCompletedTasks] = useState([]);
  
  useEffect(() => {
    setCompletedTasks(Array(tasks.length).fill(false));
  }, [tasks]);
  
  useEffect(() => {
    fetch("https://adminviber1x-production.up.railway.app/get-tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Ошибка загрузки заданий:", err));
  }, []);
 
  useEffect(() => {
    if (!userId) return;
 
    fetch(`https://1xback-production.up.railway.app/get-completed-tasks?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        const updated = tasks.map(task => data.completed.includes(task._id));
        setCompletedTasks(updated);
      })
      .catch(err => console.error("Ошибка загрузки выполненных заданий:", err));
  }, [userId, tasks]);

  const handleCheck = async (task, index) => {
    try {
      const response = await fetch("https://1xback-production.up.railway.app/check-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, chatId: task.chatId }),
      });

      const data = await response.json();
      if (data.isSubscribed) {
        const updated = [...completedTasks];
        updated[index] = true;
        fetch("https://1xback-production.up.railway.app/mark-task-completed", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, taskId: task._id })
        });
        setCompletedTasks(updated);
      } else {
        alert("❌ Подпишитесь на канал и попробуйте снова.");
      }
    } catch (err) {
      console.error("Ошибка при проверке подписки:", err);
    }
  };


  return (
    <div className="App">
      {/* Фон */}
      <div className="ONEXs_Window">   
        <div className="Header">  
          <div className="HeaderLogoContainer">  
            <img src={logo} alt="Logo" className="headerlogo" onClick={() => navigate("/")}></img>
          </div>
            <div className="HeaderButtonsContainer">  
              <img src={buttonPartners} alt="" className="headerButtonPartners" onClick={() => navigate("/ambasProgram")}></img>
              <TonConnectButton/>
            </div>
        </div>
        <div className="mainTasksPageContainer">  
          <div className="info-tasks-block"> 
            <div className="info-onexs-nameText"> 
              <h2>ONEX TASKS</h2>
              <p>Выполняй задания, чтобы фармить ONEX.<br/></p>
            </div>
          </div>
          {tasks.map((task, index) => {
            const isCompleted = completedTasks[index];
            const isFirst = index === 0;
            const isLast = index === tasks.length - 1;

            const baseClass = task.styleClass || (task.type === "single" ? "onex-task3" : "onex-task");
            const taskClass = `${baseClass}${isLast ? " onex-task-last" : ""}${isFirst ? " onex-task-first" : ""}`;
            
            return (
              <div className={taskClass} key={index}>
                <div className="info-tasks-nameText">
                  <div className="info-section">
                    <div className="infoSection-all-logo">
                      <img src={task.imageUrl} />
                      <h2>ПРИСОЕДИНЯЙСЯ<br/>К {task.title}</h2>
                    </div>
                    <div className="infoSection-all-text">
                      {task.points && (
                        <h2>+{task.points}<br />ONEX</h2>
                      )}
                    </div>
                  </div>
                  <div className="task-to-be-complete-button">
                  {task.type === "dual" && !isCompleted ? (
                    <a
                      href={task.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="to-be-complete-button"
                    >
                      ВЫПОЛНИТЬ
                    </a>
                  ) : (
                    <div
                      className={
                        isCompleted
                          ? "to-be-complete-button-Completed"
                          : task.type === "single"
                          ? "to-be-complete-button100"
                          : "to-be-complete-button"
                      }
                      onClick={(e) => {
                        if (isCompleted) return;
                        if (task.type === "single") {
                          window.open(task.link, "_blank");
                          setTimeout(() => {
                            const updated = [...completedTasks];
                            updated[index] = true;
                            setCompletedTasks(updated);
                            fetch("https://1xback-production.up.railway.app/mark-task-completed", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ userId, taskId: task._id })
                            });
                          }, 3000);
                        }
                      }}
                    >
                      {isCompleted ? "ВЫПОЛНЕНО" : "ВЫПОЛНИТЬ"}
                    </div>
                  )}
                    {task.type !== "single" && !isCompleted && (
                      <div className="to-be-check-button" onClick={() => handleCheck(task, index)}>
                        ПРОВЕРИТЬ
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Tasks;