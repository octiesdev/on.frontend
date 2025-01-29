import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/BottomMenu.module.css";

import profileIcon from "../assets/profile-icon.png";
import tasksIcon from "../assets/tasks-icon.png";
import onexIcon from "../assets/onexs-icon.png";

function BottomMenu() {
  const location = useLocation();

  return (
    <footer className={styles.menu}>
      <Link to="/" className={`${styles.menuItem} ${location.pathname === "/" ? styles.active : ""}`}>
        <img src={profileIcon} alt="Profile" />
        <span>Profile</span>
      </Link>
      <Link to="/onexs" className={`${styles.menuItem} ${location.pathname === "/onexs" ? styles.active : ""}`}>
        <img src={onexIcon} alt="Onex's" />
        <span>Onex's</span>
      </Link>
      <Link to="/tasks" className={`${styles.menuItem} ${location.pathname === "/tasks" ? styles.active : ""}`}>
        <img src={tasksIcon} alt="Tasks" />
        <span>Tasks</span>
      </Link>
    </footer>
  );
}

export default BottomMenu;