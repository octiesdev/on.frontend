import React from "react";
import styles from "../css/Tasks.module.css"; // Путь до css
import Logo from "../components/logo";

function Tasks() {
  return (
    <div className={styles.tasks}>
      <Logo />
      <div>
        <h1>Tasks</h1>
        <p>Here are your tasks!</p>
      </div>
    </div>
  );
}

export default Tasks; 