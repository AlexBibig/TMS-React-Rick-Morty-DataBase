import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Episode/Episode.module.css';

export default class Episode extends React.Component {
  render() {
    const { name, id, air_date, episode } = this.props;

    return (
      <div className={`Episode ${styles.Episode}`}>
        <div className={`textBlock ${styles.textBlock}`}>
          <p className={`episode_name ${styles.episode_name}`}>
            <Link to={`/episode/${id}`}>{name}</Link>
          </p>
          <div className='episode_info'>
            <p className='episode_number'>Episode number: {id}</p>
            <p className='episode_number'>Episode designation: {episode}</p>
            <p className='air_date'>Release date: {air_date}</p>
          </div>
        </div>
      </div>
    );
  }
}
