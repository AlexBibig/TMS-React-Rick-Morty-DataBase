import React from 'react';
import '../Character/Character.css';
import { Link } from 'react-router-dom';
import Api from '../../API';

export default class Episode extends React.Component {
  render() {
    const { name, id } = this.props;

    const rickMortyApi = new Api();
    async function getEpisodes() {
      const episodes = await rickMortyApi.getEpisodesInfoByPage(1);
      console.log(episodes);
    }
    getEpisodes();

    return (
      <div className='Episode'>
        <div className='textBlock'>
          <div className='titleBlock'>
            <p className='name'>
              <Link to={`/Episode/${id}`}>{name}</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
