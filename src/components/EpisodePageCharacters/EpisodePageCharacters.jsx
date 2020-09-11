import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../API';

const EpisodePageCharacters = (props) => {
  const { characterUrl } = props;
  const pageId = characterUrl.split('/')[5];

  const rickMortyApi = new Api();
  const [character, setName] = useState([]);
  useEffect(() => {
    async function getMultipleCharacters(num) {
      const item = await rickMortyApi.getMultipleCharacters(pageId);
      setName(item);
    }
    getMultipleCharacters(pageId);
  }, []);

  return (
    <div className='EpisodePageCharacters'>
      <Link to={`/character/${pageId}`}>
        <h1>{character.name}</h1>
      </Link>
    </div>
  );
};

export default EpisodePageCharacters;
