import React from 'react';
import { Link } from 'react-router-dom';

export default class Location extends React.Component {
  render() {
    const { name, id, type, dimension } = this.props;

    return (
      <div className='Location'>
        <div className='textBlock'>
          <p className='location_name'>
            <Link to={`/Location/${id}`}>{name}</Link>
          </p>
          <div className='location_info'>
            <p>{type}</p>
            <p>{dimension}</p>
          </div>
        </div>
      </div>
    );
  }
}
