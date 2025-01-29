import React from 'react';
import '../css/App.css';  // Подключаем стили

function Profile() {
  return (
    <div className="profile">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
      
      <div className="bottom-menu">
        <div className="bottom-menu-item">Home</div>
        <div className="bottom-menu-item">Onexs</div>
        <div className="bottom-menu-item">Tasks</div>
      </div>
    </div>
  );
}

export default Profile;