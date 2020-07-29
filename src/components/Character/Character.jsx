import React from 'react';

import './Character.css';
import Api from '../../API';
import { Link } from 'react-router-dom';

export default class Character extends React.Component {
  rickMortyApi = new Api();

  state = {
    firstEpisodeName: null,
    id: this.props.id,
  };

  componentDidMount() {
    this.rickMortyApi.getEpisodeName(this.props.firstEpisodeUrl).then((name) => {
      this.setState({
        firstEpisodeName: name,
      });
    });
  }

  render() {
    const { name, img, status, species, gender, currentLocation } = this.props;
    const { firstEpisodeName } = this.state;
    let statusCircleClass = 'statusCircle';

    if (status === 'Alive') {
      statusCircleClass += ' alive';
    } else if (status === 'Dead') {
      statusCircleClass += ' dead';
    }

    return (
      <div className='Character'>
        <div className='imgBlock'>
          <img src={img} alt={name} />
        </div>
        <div className='textBlock'>
          <div className='titleBlock'>
            <p className='name'>
              <Link to={`/character/${this.state.id}`}>{name}</Link>
            </p>
            <p className='status'>
              <span className={statusCircleClass}></span>
              <span className='statusText'>{status}</span>
              <span>-</span>
              <span className='species'>{species}</span>
              <span className='gender'>{gender}</span>
            </p>
          </div>
          <div className='locationBlock'>
            <p className='title'>Current location</p>
            <p className='location'>{currentLocation}</p>
          </div>
          <div className='firstSeenBlock'>
            <p className='title'>First seen in:</p>
            <p className='firstEpisode'>{firstEpisodeName}</p>
          </div>
        </div>
      </div>
    );
  }
}
