import React from 'react';
import './AuthorInfo.css';
import { Author } from 'types/Author';

type Props = {
  authorData: Author;
}

const AuthorInfo = ({authorData}: Props) => {

  return (
    <>
      <h3 className='author-name'>{authorData.name}</h3>
      <div className='author-info'>
        <div className='author-address'>Address: {authorData.address.city}, {authorData.address.street}, {authorData.address.suite}</div>
        <div className='author-contacts'>
          <span className='author-email'>E-mail: {authorData.email}</span>
          <span className='author-tel'>Tel: {authorData.phone}</span>
        </div>
      </div>
    </>
  );
}
export default AuthorInfo;