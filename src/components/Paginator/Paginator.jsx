import React from 'react';
import { connect } from 'react-redux';
import { setCharactersThunk } from '../../actions/setCharectersAction';
import { setEpisodesThunk } from '../../actions/setEpisodesAction';
import { setLocationsThunk } from '../../actions/setLocationsAction';
import styles from '../Paginator/Paginator.module.css';

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
      <div className={`Paginator ${styles.Paginator}`}>
        <span>
          {currentPage} page of {pageCount}
        </span>
        <div className={`btns_block ${styles.btns_block}`}>
          {prevPageUrl && (
            <button
              className={`prevBtn ${styles.prevBtn}`}
              onClick={() => getPrevEpisodePage(prevPageUrl)}
            >
              Previous
            </button>
          )}
          {nextPageUrl && (
            <button
              className={`nextBtn ${styles.nextBtn}`}
              onClick={() => getNextEpisodePage(nextPageUrl)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  } else if (pageMover === 'locations') {
    return (
      <div className={`Paginator ${styles.Paginator}`}>
        <span>
          {currentPage} page of {pageCount}
        </span>
        <div className={`btns_block ${styles.btns_block}`}>
          {prevPageUrl && (
            <button
              className={`prevBtn ${styles.prevBtn}`}
              onClick={() => getPrevLocationPage(prevPageUrl)}
            >
              Previous
            </button>
          )}
          {nextPageUrl && (
            <button
              className={`nextBtn ${styles.nextBtn}`}
              onClick={() => getNextLocationPage(nextPageUrl)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`Paginator ${styles.Paginator}`}>
        <span>
          {currentPage} page of {pageCount}
        </span>
        <div className={`btns_block ${styles.btns_block}`}>
          {prevPageUrl && (
            <button
              className={`prevBtn ${styles.prevBtn}`}
              onClick={() => getPrevCharacterPage(prevPageUrl)}
            >
              Previous
            </button>
          )}
          {nextPageUrl && (
            <button
              className={`nextBtn ${styles.nextBtn}`}
              onClick={() => getNextCharacterPage(nextPageUrl)}
            >
              Next
            </button>
          )}
        </div>
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
