import React from 'react';
import { Link } from 'react-router-dom';

export default class Location extends React.Component {
  render() {
    const { name, id } = this.props;

    return (
      <div className='Location'>
        <div className='textBlock'>
          <div className='one_location'>
            <p className='name'>
              <Link to={`/Location/${id}`}>{name}</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
