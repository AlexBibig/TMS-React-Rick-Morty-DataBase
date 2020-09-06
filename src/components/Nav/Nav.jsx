import React from 'react';
import { Link } from 'react-router-dom';
//import './Nav.css';
import styles from './Nav.styles';
import { setCharactersThunk } from '../../actions/setCharectersAction';
import { connect } from 'react-redux';

const Nav = (props) => {
    const classes = styles();
    
    return(
        <div className={`Nav ${classes.Nav}`}>
            <Link onClick={() => props.setCharacters()} to='/characters'>Characters</Link>
            <Link to='/episodes'>Episodes</Link>
            <Link to='/locations'>Locations</Link>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCharacters: () => dispatch(setCharactersThunk()),
})

export default connect(null, mapDispatchToProps)(Nav);