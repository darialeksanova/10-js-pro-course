import React from 'react';
import './CardDescription.css';

type Props = {
  content: string;
  color: string;
  fontSize: string;
  optionalElement: string
};

function CardDescription({content, color, fontSize, optionalElement}: Props) {
  return (
    <>
      <p className='card-description' style={{color: color, fontSize: fontSize}}>{content}</p>
      <span className='card-description__optional-element'>{optionalElement ? optionalElement : ''}</span> 
    </>
  );
}

export default CardDescription;
