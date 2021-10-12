import React from 'react';
import './SearchSelect.css';

type State = {
  options: number[];
};

type Props = {
  getNumberOfResults: (selectNumberElValue: string) => void;
  numberOfResults: number;
};

const options = [5, 10, 15, 20];

class SearchSelect extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      options: options,
    };
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