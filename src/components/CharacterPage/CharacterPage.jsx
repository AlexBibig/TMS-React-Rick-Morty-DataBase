import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';

const CharacterPage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [species, setSpecies] = useState();
  const [type, setType] = useState();
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
      setType(character.type);
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
    <div className='CharacterPage'>
      <h1>{name}</h1>
      <div className='characterBlock'>
        <div>{gender}</div>
        <div>
          <img src={image} alt={`${name}`} />
        </div>
        <div>{species}</div>
        <div>{type}</div>
        <div>{status}</div>
        <Link to={`/location/${pageOriginId}`}>
          <h1>{origin}</h1>
        </Link>
        <Link to={`/location/${pageLocationId}`}>
          <h1>{location}</h1>
        </Link>
      </div>
    </div>
  );
};

export default CharacterPage;
