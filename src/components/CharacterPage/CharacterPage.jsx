import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import Spinner from '../Spinner';

const CharacterPage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [species, setSpecies] = useState();
  const [type, setType] = useState();
  const [gender, setGender] = useState();
  const [origin, setOrigin] = useState();
  const [location, setLocation] = useState();
  const [locationUrl, setLocationUrl] = useState();
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
      setLocation(character.location.name); //
      setLocationUrl(character.location.url); //
      setImage(character.image);
    }

    getCharacter(id);
  }, [id, rickMortyApi]);

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
        <div>{origin}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default CharacterPage;
