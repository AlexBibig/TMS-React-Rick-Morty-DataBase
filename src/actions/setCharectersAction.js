import Api from '../API';

const rickMortyApi = new Api();

export const setCharactersThunk = (pageUrl = null) => {
  let pageNumber = null;

  if (pageUrl) {
    const arr = pageUrl.split('=');
    pageNumber = arr[arr.length - 1];
  }
  return function (dispatch) {
    return rickMortyApi.getCharactersInfoByPage(pageNumber).then(async (data) => {
      const characters = [];
      const responseCharactersArr = data.results;
      const responseInfoObj = data.info;

      for (let i = 0; i < responseCharactersArr.length; i++) {
        const firstEpisodeNameUrl = responseCharactersArr[i].episode[0];
        const firstEpisodeName = await rickMortyApi.getEpisodeName(firstEpisodeNameUrl);
        const newObject = { ...responseCharactersArr[i], firstEpisodeName };

        characters.push(newObject);
      }

      dispatch({
        type: 'IS_CHARACTERS',
        payload: {
          characters,
          paginator: {
            prevPageUrl: responseInfoObj.prev,
            nextPageUrl: responseInfoObj.next,
            pageCount: responseInfoObj.pages,
            currentPage: pageNumber || 1,
          },
        },
      });
    });
  };
};

export const setEpisodesThunk = (pageUrl = null) => {
  let pageNumber = null;

  if (pageUrl) {
    const arr = pageUrl.split('=');
    pageNumber = arr[arr.length - 1];
  }
  return function (dispatch) {
    return rickMortyApi.getEpisodesInfoByPage(pageNumber).then(async (data) => {
      const episodes = [];
      const responseEpisodesArr = data.results;
      const responseInfoObj = data.info;

      // for (let i = 0; i < responseCharactersArr.length; i++) {
      //   const firstEpisodeNameUrl = responseCharactersArr[i].episode[0];
      //   const firstEpisodeName = await rickMortyApi.getEpisodeName(
      //     firstEpisodeNameUrl
      //   );
      //   const newObject = { ...responseCharactersArr[i], firstEpisodeName };

      //   characters.push(newObject);
      // }

      dispatch({
        type: 'IS_EPISODES',
        payload: {
          episodes,
          paginator: {
            prevPageUrl: responseInfoObj.prev,
            nextPageUrl: responseInfoObj.next,
            pageCount: responseInfoObj.pages,
            currentPage: pageNumber || 1,
          },
        },
      });
    });
  };
};
