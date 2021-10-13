import React from 'react';
import './SearchBar.css';

type Props = {
  searchBarValue: string;
  searchBarValueChange: (newSearchBarValue: string) => void;
}

function SearchBar(props: Props) {

  return (
    <input 
      type='text'
      className='search-bar' 
      value={props.searchBarValue}
      onChange={(event) => props.searchBarValueChange(event.target.value)}
    >
    </input>
  );
}



export default SearchBar;