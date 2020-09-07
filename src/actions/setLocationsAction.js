import Api from '../API';

const rickMortyApi = new Api();

export const setLocationsThunk = (pageUrl = null) => {
  let pageNumber = null;

  if (pageUrl) {
    const arr = pageUrl.split('=');
    pageNumber = arr[arr.length - 1];
  }
  return function (dispatch) {
    return rickMortyApi.getLocationsInfoByPage(pageNumber).then(async (data) => {
      const locations = [];
      const responseLocationsArr = data.results;
      const responseInfoObj = data.info;

      for (let i = 0; i < responseLocationsArr.length; i++) {
        const newObject = { ...responseLocationsArr[i] };

        locations.push(newObject);
      }

      dispatch({
        type: 'IS_LOCATIONS',
        payload: {
          locations,
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
