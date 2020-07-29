import React from 'react';
import { Link } from 'react-router-dom';
// import './Nav.css';
import styles from './Nav.styles';

const Nav = () => {
  const classes = styles();

  return (
    <div className={classes.Nav}>
      <Link to='/characters'>Characters</Link>
      <Link to='/episodes'>Episodes</Link>
      <Link to='/locations'>Locations</Link>
    </div>
  );
};

export default Nav;
