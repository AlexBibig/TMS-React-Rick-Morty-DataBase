import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
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
  const [location, setLocation] = useState();
  const [locationUrl, setLocationUrl] = useState();
  const [episode, setEpisode] = useState();
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
      setEpisode(character.episode); //
      setImage(character.image);
    }

    getCharacter(id);
  }, [id, rickMortyApi]);

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
        <p>
          <Link to={`/episode/${id}`}>{episode}</Link>
        </p>
      </div>
    </div>
  );
};

export default CharacterPage;
