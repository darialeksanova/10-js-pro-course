import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import EmojiContainer from './components/EmojiContainer';
import SearchSelect from './components/SearchSelect';

function App () {
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [numberOfResults, setNumberOfResults] = React.useState(15);

  function handleSearchBarValueChange(newSearchBarValue: string): void {
    setSearchBarValue(newSearchBarValue);
  }

  function getNumberOfResults(selectNumberElValue: string): void {
    setNumberOfResults(parseFloat(selectNumberElValue));
  }

  return (
    <div className="App">
      <SearchSelect 
        getNumberOfResults={getNumberOfResults}
        numberOfResults={numberOfResults}
      />
      <SearchBar
        searchBarValue={searchBarValue}
        searchBarValueChange={handleSearchBarValueChange}
      />
      <EmojiContainer
        searchBarValue={searchBarValue}
        numberOfResults={numberOfResults}
      />
    </div>
  );
}

export default App;
