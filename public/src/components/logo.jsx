import React from "react";
import styles from "./Logo.module.css";
import logoImage from "../assets/logo.png";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logoImage} alt="Logo" />
    </div>
  );
}

export default Logo;