import React from 'react';
import './Button.css';

type Props = {
  handleButtonClick: Function;
  content: string;
  backgroundColor: string;
};

function Button({handleButtonClick, content, backgroundColor}: Props) {
  return (
    <button 
      className='button' 
      style={{backgroundColor: backgroundColor}}
      onClick={() => handleButtonClick()}
    >
      <p className='button-content'>{content}</p>
    </button>
  );
}

export default Button;
