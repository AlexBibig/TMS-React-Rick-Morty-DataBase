import React from 'react';
import Episode from '../Episode';
import { connect } from 'react-redux';
import Paginator from '../Paginator';
import Spinner from '../Spinner';
import styles from '../EpisodesList/EpisodesList.module.css';

class EpisodesList extends React.Component {
  render() {
    const { episodes } = this.props;
    const pageMover = 'episodes';

    const items = episodes.map((item) => {
      return (
        <li key={item.id}>
          <Episode id={item.id} name={item.name} air_date={item.air_date} episode={item.episode} />
        </li>
      );
    });

    if (!episodes.length) {
      return <Spinner />;
    }

    return (
      <>
        <div className={`EpisodesList ${styles.EpisodesList}`}>
          <h1>Episodes</h1>
          <ul>{items}</ul>
        </div>
        <Paginator pageMover={pageMover} />
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
