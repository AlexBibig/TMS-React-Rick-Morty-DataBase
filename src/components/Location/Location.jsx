import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Location/Location.module.css';

export default class Location extends React.Component {
  render() {
    const { name, id, type, dimension } = this.props;

    return (
      <div className={`Location ${styles.Location}`}>
        <div className={`textBlock ${styles.textBlock}`}>
          <p className={`episode_name ${styles.episode_name}`}>
            <Link to={`/Location/${id}`}>{name}</Link>
          </p>
          <div className='location_info'>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
          </div>
        </div>
      </div>
    );
  }
}
