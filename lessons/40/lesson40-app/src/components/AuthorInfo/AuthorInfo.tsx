import React from 'react';
import styles from './AuthorInfo.module.css';
import { Author } from 'types/Author';

type Props = {
  authorData: Author;
}

const AuthorInfo = ({authorData}: Props): JSX.Element => {
console.log({ styles });

  return (
    <>
      <h3 className={styles['author-name']}>{authorData.name}</h3>
      <div className={styles['author-info']}>
        <div className={styles['author-address']}>Address: {authorData.address.city}, {authorData.address.street}, {authorData.address.suite}</div>
        <div className={styles['author-contacts']}>
          <span className={styles['author-email']}>E-mail: {authorData.email}</span>
          <span className={styles['author-tel']}>Tel: {authorData.phone}</span>
        </div>
      </div>
    </>
  );
}
export default AuthorInfo;