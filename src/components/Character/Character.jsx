import React from 'react';
import styles from './Character.module.css';
import { Link } from 'react-router-dom';

export default class Character extends React.Component {
  render() {
    const { name, img, status, species, gender, currentLocation, firstEpisodeName, id } = this.props;

    let statusCircleClass = styles.statusCircle;

    if (status === 'Alive') {
      statusCircleClass += ` ${styles.alive}`;
    } else if (status === 'Dead') {
      statusCircleClass += ` ${styles.dead}`;
    }

    return (
      <div className={`Character ${styles.Character}`}>
        <div className={`imgBlock ${styles.imgBlock}`}>
          <img src={img} alt={name} />
        </div>
        <div className={`textBlock ${styles.textBlock}`}>
          <div className='titleBlock'>
            <p className={`name ${styles.name}`}>
              <Link to={`/character/${id}`}>{name}</Link>
            </p>
            <div className='status'>
              <p>
                <span className={`${statusCircleClass} `}></span>
                <span className='statusText'>{status}</span>
              </p>
              <p>
                <span className='species'>{species}</span>
              </p>
              <p>
                <span className='gender'>{gender}</span>
              </p>
            </div>
          </div>
          <div className='firstSeenBlock'>
            <p className='title'>First seen in: {firstEpisodeName}</p>
            <p className='firstEpisode'></p>
          </div>
        </div>
      </div>
    );
  }
}
