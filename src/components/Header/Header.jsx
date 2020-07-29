import React from 'react';
// import './Header.css';
import styles from './Header.module.css';
import Nav from '../Nav';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.title_block}>
        <p>Rick & Morty BD</p>
      </div>
      <div className={styles.nav_block}>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
