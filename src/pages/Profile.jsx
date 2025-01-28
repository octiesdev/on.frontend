import React from "react";
import styles from "../css/Profile.module.css"; // Путь до папки css
import Logo from "../components/Logo";

function Profile() {
  return (
    <div className={styles.profile}>
      <Logo />
      <div>
        <h1>Profile</h1>
        <p>Welcome to your profile page!</p>
      </div>
    </div>
  );
}

export default Profile;