import React from 'react';
import styles from './Character.module.css';
import { Link } from 'react-router-dom';

export default class Character extends React.Component {
  render() {
    const { name, img, status, species, gender, firstEpisodeName, id } = this.props;

    let statusCircleClass = styles.statusCircle;

    if (status === 'Alive') {
      statusCircleClass += ` ${styles.alive}`;
    } else if (status === 'Dead') {
      statusCircleClass += ` ${styles.dead}`;
    }

    return (
      <div className={`Character ${styles.Character}`}>
        <div className={`imgBlock ${styles.imgBlock}`}>
          <Link to={`/character/${id}`}>
            <img src={img} alt={name} />
          </Link>
        </div>
        <div className={`textBlock ${styles.textBlock}`}>
          <div className='titleBlock'>
            <p className={`name ${styles.name}`}>
              <Link to={`/character/${id}`}>{name}</Link>
            </p>
            <div className='status'>
              <p>
                <span className={`${statusCircleClass} `}></span>
                <span className='statusText'> {status}</span>
              </p>
              <p>
                Species: <b>{species}</b>
              </p>
              <p>
                Gender: <b>{gender}</b>
              </p>
              <p>
                First seen in: <b>{firstEpisodeName}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
