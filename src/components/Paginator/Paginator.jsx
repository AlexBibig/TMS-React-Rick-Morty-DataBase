import React from 'react';
import { connect } from 'react-redux';
import { setCharactersThunk } from '../../actions/setCharectersAction';
import { setEpisodesThunk } from '../../actions/setEpisodesAction';
import { setLocationsThunk } from '../../actions/setLocationsAction';

const Paginator = (props) => {
  const {
    nextPageUrl,
    prevPageUrl,
    currentPage,
    pageCount,
    getNextCharacterPage,
    getPrevCharacterPage,
    getNextEpisodePage,
    getPrevEpisodePage,
    getNextLocationPage,
    getPrevLocationPage,
    pageMover,
  } = props;

  if (pageMover === 'episodes') {
    return (
      <div className='Paginator'>
        {prevPageUrl && <button onClick={() => getPrevEpisodePage(prevPageUrl)}>prevBtn</button>}
        <span>
          {currentPage} page of {pageCount}
        </span>
        {nextPageUrl && <button onClick={() => getNextEpisodePage(nextPageUrl)}>nextBtn</button>}
      </div>
    );
  } else if (pageMover === 'locations') {
    return (
      <div className='Paginator'>
        {prevPageUrl && <button onClick={() => getPrevLocationPage(prevPageUrl)}>prevBtn</button>}
        <span>
          {currentPage} page of {pageCount}
        </span>
        {nextPageUrl && <button onClick={() => getNextLocationPage(nextPageUrl)}>nextBtn</button>}
      </div>
    );
  } else {
    return (
      <div className='Paginator'>
        {prevPageUrl && <button onClick={() => getPrevCharacterPage(prevPageUrl)}>prevBtn</button>}
        <span>
          {currentPage} page of {pageCount}
        </span>
        {nextPageUrl && <button onClick={() => getNextCharacterPage(nextPageUrl)}>nextBtn</button>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  nextPageUrl: state.paginator.nextPageUrl,
  prevPageUrl: state.paginator.prevPageUrl,
  pageCount: state.paginator.pageCount,
  currentPage: state.paginator.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  getNextCharacterPage: (nextPageUrl) => dispatch(setCharactersThunk(nextPageUrl)),
  getPrevCharacterPage: (prevPageUrl) => dispatch(setCharactersThunk(prevPageUrl)),
  getNextEpisodePage: (nextPageUrl) => dispatch(setEpisodesThunk(nextPageUrl)),
  getPrevEpisodePage: (prevPageUrl) => dispatch(setEpisodesThunk(prevPageUrl)),
  getNextLocationPage: (nextPageUrl) => dispatch(setLocationsThunk(nextPageUrl)),
  getPrevLocationPage: (prevPageUrl) => dispatch(setLocationsThunk(prevPageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
