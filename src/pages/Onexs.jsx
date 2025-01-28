import React from "react";
import styles from "../css/Onexs.module.css"; // Путь до css
import Logo from "../components/Logo";

function Onexs() {
  return (
    <div className={styles.onexs}>
      <Logo />
      <div>
        <h1>Onex's</h1>
        <p>Welcome to the Onex's page!</p>
      </div>
    </div>
  );
}

export default Onexs;