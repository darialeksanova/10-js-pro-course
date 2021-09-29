import React from 'react';
import './Card.css';

type Props = {
  backgroundColor?: string;
  children: JSX.Element[],
};

function Card({children, backgroundColor}: Props) {
  return (
    <div 
      className='card' 
      style={{backgroundColor: backgroundColor || 'none'}}
    >
      {children}
    </div>
  );
}

export default Card;
