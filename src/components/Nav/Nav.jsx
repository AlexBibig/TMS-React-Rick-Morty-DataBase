import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { setCharactersThunk } from '../../actions/setCharectersAction';
import { setEpisodesThunk } from '../../actions/setEpisodesAction';
import { setLocationsThunk } from '../../actions/setLocationsAction';
import { connect } from 'react-redux';

const Nav = (props) => {
  return (
    <div className={`Nav ${styles.Nav}`}>
      <Link onClick={() => props.setCharacters()} to='/characters'>
        characters
      </Link>
      <Link onClick={() => props.setEpisodes()} to='/episodes'>
        episodes
      </Link>
      <Link onClick={() => props.setLocations()} to='/locations'>
        locations
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCharacters: () => dispatch(setCharactersThunk()),
  setEpisodes: () => dispatch(setEpisodesThunk()),
  setLocations: () => dispatch(setLocationsThunk()),
});

export default connect(null, mapDispatchToProps)(Nav);
