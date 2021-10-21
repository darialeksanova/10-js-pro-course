import React from 'react';
import styles from './AuthorInfo.module.css';
import { Author } from 'types/Author';

type Props = {
  authorData: Author;
}

const AuthorInfo = ({authorData}: Props): JSX.Element => {
  return (
    <>
      <h3 className={styles.authorName}>{authorData.name}</h3>
      <div className={styles.authorInfo}>
        <div className={styles.authorAddress}>Address: {authorData.address.city}, {authorData.address.street}, {authorData.address.suite}</div>
        <div className={styles.authorContacts}>
          <span className={styles.authorEmail}>E-mail: {authorData.email}</span>
          <span className={styles.authorTel}>Tel: {authorData.phone}</span>
        </div>
      </div>
    </>
  );
}
export default AuthorInfo;