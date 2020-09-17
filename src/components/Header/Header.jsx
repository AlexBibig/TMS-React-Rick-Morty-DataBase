import React from 'react';
import styles from './Header.module.css';
import Nav from '../Nav';
import logo from '../../others/img/rrick-morty-logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={`Header ${styles.Header}`}>
      <div className='title_block'>
        <Link className={styles.logo_link} to='/TMS-React-Rick-Morty-DataBase/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='nav_block'>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
