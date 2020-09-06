import React from "react";
//import './Header.css';
import styles from "./Header.module.css";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={`Header ${styles.Header}`}>
      <div className="title_block">
        <Link className={styles.logo_link} to="/">
          Rick & Morty BD
        </Link>
      </div>
      <div className="nav_block">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
