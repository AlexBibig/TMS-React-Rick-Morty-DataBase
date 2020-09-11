import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../API';

const LocationPageResidents = (props) => {
  const { residentUrl } = props;
  const pageId = residentUrl.split('/')[5];

  const rickMortyApi = new Api();
  const [resident, setName] = useState([]);
  useEffect(() => {
    async function getMultipleCharacters(num) {
      const item = await rickMortyApi.getMultipleCharacters(pageId);
      setName(item);
    }
    getMultipleCharacters(pageId);
  }, []);

  return (
    <div className='LocationPageResidents'>
      <Link to={`/character/${pageId}`}>
        <h1>{resident.name}</h1>
      </Link>
    </div>
  );
};

export default LocationPageResidents;
