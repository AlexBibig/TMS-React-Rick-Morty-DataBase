import React from 'react';
import Spinner from '../Spinner';
import styles from '../MainPage/MainPage.module.css';

const MainPage = () => {
  return (
    <div className={`MainPage ${styles.MainPage}`}>
      <h1>RICK AND MORTY DATABASE</h1>
      <p>Select any TAB to see info</p>
    </div>
  );
};

export default MainPage;
