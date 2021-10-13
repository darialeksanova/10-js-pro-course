import React from 'react';
import './SearchSelect.css';

type Props = {
  getNumberOfResults: (selectNumberElValue: string) => void;
  numberOfResults: number;
};

function SearchSelect(props: Props) {
  const options = [5, 10, 15, 20];

  return (
    <div className='results-number'>
    <span>Show</span>
    <select className='results-number__select' onChange={(event) => props.getNumberOfResults(event.target.value)} defaultValue={props.numberOfResults}>
      {options.map((option, index) => {
        return <option key={index} value={option}>{option}</option>;
      })}
    </select>
    <span>results</span>
    </div>
  );
}



export default SearchSelect;