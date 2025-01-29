import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Footer.css";
import IconHome from "./assets/iconProfile.png";
import IconTasks from "./assets/iconTasks.png";
import IconOnexs from "./assets/iconOnexs.png";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="BTNLow">
      <ul className="footerItems">
        <li className="footerItem">
          <Link className={`footerItemImgWrapper ${location.pathname !== "/" ? "img-dark" : ""}`} to="/">
            <img src={IconHome} alt="Home" className="footerItemImg" />
          </Link>
          <p className={`footerItemLabel ${location.pathname !== "/" ? "footerItemLabel-dark" : ""}`}>
            PROFILE
          </p>
        </li>
        <li className="footerItem">
          <Link className={`footerItemImgWrapper ${location.pathname !== "/tasks" ? "img-dark" : ""}`} to="/tasks">
            <img src={IconTasks} alt="Tasks" className="footerItemImg" />
          </Link>
          <p className={`footerItemLabel ${location.pathname !== "/tasks" ? "footerItemLabel-dark" : ""}`}>
            TASKS
          </p>
        </li>
        <li className="footerItem">
          <Link className={`footerItemImgWrapper ${location.pathname !== "/onexs" ? "img-dark" : ""}`} to="/onexs">
            <img src={IconOnexs} alt="ONEX's" className="footerItemImg" />
          </Link>
          <p className={`footerItemLabel ${location.pathname !== "/onexs" ? "footerItemLabel-dark" : ""}`}>
            ONEX’s
          </p>
        </li>
      </ul>
    </footer>
  );
};


export default Footer;