import React from 'react';
import './Price.css';

type Props = {
  amount: string;
  period: string;
};

function Price({amount, period}: Props) {
  return (
    <div className='price'>
      <p className='price__amount'>{amount}</p>
      <p className='price__period'>/{period}</p>
    </div>
  );
}

export default Price;
