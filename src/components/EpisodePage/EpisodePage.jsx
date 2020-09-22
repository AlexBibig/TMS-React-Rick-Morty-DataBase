import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import EpisodePageCharacters from '../EpisodePageCharacters';
import Spinner from '../Spinner';
import styles from '../EpisodePage/EpisodePage.module.css';

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

  if (!name) {
    return <Spinner />;
  }

  const items = characters.map((item, index) => {
    return (
      <li key={index}>
        <EpisodePageCharacters characterUrl={item} />
      </li>
    );
  });

  return (
    <div className={`EpisodePage ${styles.EpisodePage}`}>
      <div className={`infoBlock ${styles.infoBlock}`}>
        <div>
          <span>Number: </span>
          <span>{id}</span>
        </div>
        <div>
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div>
          <span>Air date: </span>
          <span>{airDate}</span>
        </div>
        <div>
          <span>Designation:: </span>
          <span>{episode}</span>
        </div>
      </div>

      <div className={`listBlock ${styles.listBlock}`}>
        <h2>List of characters from this episode:</h2>
        <ul>
          <li>{items}</li>
        </ul>
      </div>
    </div>
  );
};

export default EpisodePage;
