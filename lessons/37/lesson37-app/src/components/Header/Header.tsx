import React from 'react';
import './Header.css';

type Props = {
  title: string,
};

function Header({title}: Props) {
  return (
    <header className='header'>
      <h1 className='header__main-title'>{title}</h1>
    </header>
  );
}

export default Header;
