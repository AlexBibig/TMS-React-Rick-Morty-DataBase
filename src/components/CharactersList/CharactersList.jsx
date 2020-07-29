import React from 'react';
import './CharactersList.css';
import Api from '../../API';
import Character from '../Character';

export default class CharactersList extends React.Component {
  rickMortyApi = new Api();

  state = {
    characters: [],
  };

  componentDidMount() {
    this.rickMortyApi.getAllCharacters().then((data) =>
      this.setState({
        characters: data,
      }),
    );
  }

  render() {
    const { characters } = this.state;

    const items = characters.map((item) => {
      //   console.log(item);
      return (
        <li key={item.id}>
          <Character
            name={item.name}
            img={item.image}
            status={item.status}
            species={item.species}
            gender={item.gender}
            currentLocation={item.location.name}
            firstEpisodeUrl={item.episode[0]}
            id={item.id}
          />
        </li>
      );
    });

    return (
      <div className='CharactersList'>
        <h1>Characters</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
