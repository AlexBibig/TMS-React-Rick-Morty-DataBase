import React from 'react';
// import './CharactersList.css';
import Character from '../Character';
import Episode from '../Episode';
import { connect } from 'react-redux';
import Paginator from '../Paginator';

class EpisodesList extends React.Component {
  render() {
    const { episodes } = this.props;

    const items = episodes.map((item) => {
      return (
        <li key={item.id}>
          <Episode name={item.name} />
        </li>
      );
    });

    return (
      <>
        <div className='CharactersList'>
          <h1>Episodes</h1>
          <ul>{items}</ul>
        </div>
        <Paginator />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes,
  };
};

export default connect(mapStateToProps)(EpisodesList);
