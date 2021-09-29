import React from 'react';
import './CardTitle.css';

type Props = {
  symbol: string;
  title: string;
  color: string;
  isBold: string;
};

function CardTitle({symbol, title, color, isBold}: Props) {
  return (
    <h2 
      className='card-title' 
      style={{color: color || 'black', fontWeight: isBold === 'true' ? 700 : 400}}
    >
      {symbol ? `${symbol} `: ''}{title}
    </h2>
  );
}

export default CardTitle;
