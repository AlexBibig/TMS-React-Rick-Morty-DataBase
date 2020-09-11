import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import LocationPageResidents from '../LocationPageResidents';

const LocationPage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [dimension, setDimension] = useState();
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    async function getLocation(id) {
      const location = await rickMortyApi.getLocation(id);
      setName(location.name);
      setType(location.type);
      setDimension(location.dimension);
      setResidents(location.residents);
    }
    getLocation(id);
  }, [id]);

  console.log(residents);

  const items = residents.map((item) => {
    return (
      <li key={id}>
        <LocationPageResidents residentUrl={item} />
      </li>
    );
  });

  return (
    <div className='LocationPage'>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{type}</h1>
      <h1>{dimension}</h1>
      <ul>{items}</ul>
    </div>
  );
};

export default LocationPage;
