import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import EmojiContainer from './components/EmojiContainer';
import SearchSelect from './components/SearchSelect';

type Props = {}
type State = {
  searchBarValue: string;
  numberOfResults: number;
}

class App extends React.Component {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      searchBarValue: '',
      numberOfResults: 15,
    };
  }

  handleSearchBarValueChange = (newSearchBarValue: string): void => {
    this.setState({ searchBarValue: newSearchBarValue });
  }

  getNumberOfResults = (selectNumberElValue: string) => {
    this.setState({numberOfResults: parseFloat(selectNumberElValue)});
  }

  render() {
    return (
      <div className="App">
        <SearchSelect 
          getNumberOfResults={this.getNumberOfResults}
          numberOfResults={this.state.numberOfResults}
        />
        <SearchBar
          searchBarValue={this.state.searchBarValue}
          searchBarValueChange={this.handleSearchBarValueChange}
        />
        <EmojiContainer
          searchBarValue={this.state.searchBarValue}
          numberOfResults={this.state.numberOfResults}
        />
      </div>
    );
  }
}

export default App;
