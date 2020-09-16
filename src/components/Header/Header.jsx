import React from 'react';
import styles from './Header.module.css';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={`Header ${styles.Header}`}>
      <div className='title_block'>
        <Link className={styles.logo_link} to='/Main'>
          Rick and Morty Database
        </Link>
      </div>
      <div className='nav_block'>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
