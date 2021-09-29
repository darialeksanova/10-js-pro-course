import React from 'react';
import './Field.css';

type Props = {
  children: JSX.Element,
};

function Field({ children }: Props) {
  return (
    <div className='field'>
      { children }
    </div>
  );
}

export default Field;
