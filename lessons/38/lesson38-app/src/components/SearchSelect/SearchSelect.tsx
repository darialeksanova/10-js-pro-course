import React from 'react';
import './SearchSelect.css';

type State = {
  options: number[];
};

type Props = {
  getNumberOfResults: (selectNumberElValue: string) => void;
  numberOfResults: number;
};

class SearchSelect extends React.Component {
  state: State;
  props: Props;

  constructor(props: Props) {
    super(props);

    this.state = {
      options: [5, 10, 15, 20],
    };

    this.props = props;
  }

  render() {
    return (
      <div className='results-number'>
      <span>Show</span>
      <select className='results-number__select' onChange={(event) => this.props.getNumberOfResults(event.target.value)}>
        {this.state.options.map((option, index) => {
          return <option key={index} value={option} selected={option === this.props.numberOfResults}>{option}</option>;
        })}
      </select>
      <span>results</span>
      </div>
    );
  }
}



export default SearchSelect;