import * as React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => (
  <div className="pa2">
    <input
      type="search"
      placeholder="Search Member"
      className="pa3 ba br3 tc b--dark-gray bg-dark-gray near-white"
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
