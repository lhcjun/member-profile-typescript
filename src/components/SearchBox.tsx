import * as React from 'react';
import './SearchBox.css';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ searchChange }) => (
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
