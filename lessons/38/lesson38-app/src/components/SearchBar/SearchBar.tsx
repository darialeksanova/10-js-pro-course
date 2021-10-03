import React from 'react';
import './SearchBar.css';

type Props = {
  searchBarValue: string;
  searchBarValueChange: (newSearchBarValue: string) => void;
}

class SearchBar extends React.Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <input 
        type='text'
        className='search-bar' 
        value={this.props.searchBarValue}
        onChange={(event) => this.props.searchBarValueChange(event.target.value)}
      >
      </input>
    );
  }
}



export default SearchBar;