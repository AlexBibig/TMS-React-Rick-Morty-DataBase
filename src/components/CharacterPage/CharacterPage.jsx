import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import styles from '../CharacterPage/CharacterPage.module.css';

const CharacterPage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [species, setSpecies] = useState();
  const [gender, setGender] = useState();
  const [origin, setOrigin] = useState();
  const [originUrl, setOriginUrl] = useState('');
  const [location, setLocation] = useState();
  const [locationUrl, setLocationUrl] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    async function getCharacter(id) {
      const character = await rickMortyApi.getCharacter(id);
      setName(character.name);
      setStatus(character.status);
      setSpecies(character.species);
      setGender(character.gender);
      setOrigin(character.origin.name); //
      setOriginUrl(character.origin.url); //
      setLocation(character.location.name); //
      setLocationUrl(character.location.url); //
      setImage(character.image);
    }

    getCharacter(id);
  }, [id, rickMortyApi]);

  let pageOriginId = originUrl.split('/')[5];
  let pageLocationId = locationUrl.split('/')[5];

  if (!name) {
    return <Spinner />;
  }

  return (
    <div className={`CharacterPage ${styles.CharacterPage}`}>
      <div className={`imageBlock ${styles.imageBlock}`}>
        <div>
          <img src={image} alt={`${name}`} />
        </div>
        <p>{name}</p>
      </div>
      <div className={`infoBlock ${styles.infoBlock}`}>
        <div>
          <span>Gender: </span>
          <span>{gender}</span>
        </div>
        <div>
          <span>Species: </span>
          <span>{species}</span>
        </div>
        <div>
          <span>Status: </span>
          <span>{status}</span>
        </div>
        <div>
          <span>Origin planet: </span>
          <Link to={`/location/${pageOriginId}`}>
            <span>{origin}</span>
          </Link>
        </div>
        <div>
          <span>Last known location: </span>
          <Link to={`/location/${pageLocationId}`}>
            <span>{location}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
