import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import LocationPageResidents from '../LocationPageResidents';
import Spinner from '../Spinner';
import styles from '../LocationPage/LocationPage.module.css';

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

  if (!name) {
    return <Spinner />;
  }

  const items = residents.map((item, index) => {
    return (
      <li key={index}>
        <LocationPageResidents residentUrl={item} />
      </li>
    );
  });

  return (
    <div className={`LocationPage ${styles.LocationPage}`}>
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
          <span>Type: </span>
          <span>{type}</span>
        </div>
        <div>
          <span>Dimension: </span>
          <span>{dimension}</span>
        </div>
      </div>
      <div className={`listBlock ${styles.listBlock}`}>
        <h2>List of character who have been last seen in the location:</h2>
        <ul>
          <li>{items}</li>
        </ul>
      </div>
    </div>
  );
};

export default LocationPage;
