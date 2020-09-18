import React from 'react';
import Location from '../Location';
import { connect } from 'react-redux';
import Paginator from '../Paginator';
import Spinner from '../Spinner';
import styles from '../LocationsList/LocationsList.module.css';

class LocationsList extends React.Component {
  render() {
    const { locations } = this.props;
    const pageMover = 'locations';

    const items = locations.map((item) => {
      return (
        <li key={item.id}>
          <Location id={item.id} name={item.name} type={item.type} dimension={item.dimension} />
        </li>
      );
    });

    if (!locations.length) {
      return <Spinner />;
    }

    return (
      <>
        <div className={`LocationsList ${styles.LocationsList}`}>
          <h1>Locations</h1>
          <ul>{items}</ul>
        </div>
        <Paginator pageMover={pageMover} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps)(LocationsList);
