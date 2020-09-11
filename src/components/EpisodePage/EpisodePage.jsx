import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import EpisodePageCharacters from '../EpisodePageCharacters';

const EpisodePage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();
  const [name, setName] = useState();
  const [airDate, setAirDate] = useState();
  const [episode, setEpisode] = useState();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getEpisode(id) {
      const episode = await rickMortyApi.getEpisode(id);
      setName(episode.name);
      setAirDate(episode.air_date);
      setEpisode(episode.episode);
      setCharacters(episode.characters);
    }
    getEpisode(id);
  }, [id]);

  console.log(characters);

  const items = characters.map((item) => {
    return (
      <li key={id}>
        <EpisodePageCharacters characterUrl={item} />
      </li>
    );
  });

  return (
    <div className='EpisodePage'>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{airDate}</h1>
      <h1>{episode}</h1>
      <ul>{items}</ul>
    </div>
  );
};

export default EpisodePage;
