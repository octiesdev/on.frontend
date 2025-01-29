import React from "react";
import BottomMenu from "../components/BottomMenu";
import Logo from "../components/Logo";
import "./styles/Profile.css";  // Подключаем стили

function Profile() {
  return (
    <div className="profile-page">
      <Logo />
      <h1>Profile Page</h1>
      <BottomMenu />
    </div>
  );
}

export default Profile;