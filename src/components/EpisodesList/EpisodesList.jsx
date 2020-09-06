import React from 'react';
import Api from '../../API';

const EpisodesList = () => {
  const rickMortyApi = new Api();

  async function getEpisodes() {
    const episodes = await rickMortyApi.getEpisodesInfoByPage(2);
    console.log(episodes);
  }
  getEpisodes();

  return <div className='EpisodesList'>EpisodesList</div>;
};

export default EpisodesList;
