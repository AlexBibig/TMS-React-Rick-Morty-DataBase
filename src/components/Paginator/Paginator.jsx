import React from "react";
import { connect } from "react-redux";
import { setCharactersThunk } from "../../actions/setCharectersAction";

const Paginator = (props) => {
  const {
    nextPageUrl,
    prevPageUrl,
    currentPage,
    pageCount,
    getNextPage,
    getPrevPage,
  } = props;
  return (
    <div className="Paginator">
      {prevPageUrl && (
        <button onClick={() => getPrevPage(prevPageUrl)}>prevBtn</button>
      )}
      <span>{currentPage}</span>
      {nextPageUrl && (
        <button onClick={() => getNextPage(nextPageUrl)}>nextBtn</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  nextPageUrl: state.paginator.nextPageUrl,
  prevPageUrl: state.paginator.prevPageUrl,
  pageCount: state.paginator.pageCount,
  currentPage: state.paginator.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  getNextPage: (nextPageUrl) => dispatch(setCharactersThunk(nextPageUrl)),
  getPrevPage: (prevPageUrl) => dispatch(setCharactersThunk(prevPageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
