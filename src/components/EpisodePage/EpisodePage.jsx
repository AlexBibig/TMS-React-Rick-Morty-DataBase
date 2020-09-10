// import React from 'react';
// import { connect } from 'react-redux';

// class EpisodePage extends React.Component {
//   render() {
//     const { episodes } = this.props;
//     console.log(episodes[1].name);

//     return (
//       <>
//         <div className='EpisodesList'>
//           <h1>Episodes</h1>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     episodes: state.episodes,
//   };
// };

// export default connect(mapStateToProps)(EpisodePage);

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import { Link } from 'react-router-dom';

const EpisodePage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    async function getEpisode(id) {
      const episode = await rickMortyApi.getEpisode(id);
      setName(episode.name);
      setCharacters(episode.characters);
    }

    getEpisode(id);
  }, [id, rickMortyApi]);

  // const log = async () => {
  //   const newArr = await characters.slice();
  //   console.log(newArr);
  // };

  // log();

  return (
    <div className='EpisodePage'>
      <h1>{name}</h1>
      <h1>{id}</h1>
      <h1>{characters}</h1>
    </div>
  );
};

export default EpisodePage;
