import React from 'react';
import '../Character/Character.css';
import { Link } from 'react-router-dom';

export default class Episode extends React.Component {
  render() {
    const { name, id, air_date, episode } = this.props;

    return (
      <div className='Episode'>
        <div className='textBlock'>
          <div className='one_episode'>
            <p className='name'>
              <Link to={`/episode/${id}`}>{name}</Link>
            </p>
            <p className='air_date'>Release date: {air_date}</p>
            <p className='episode_number'>Episode number: {episode}</p>
            <p className='episode_number'>Episode number: {id}</p>
          </div>
        </div>
      </div>
    );
  }
}
