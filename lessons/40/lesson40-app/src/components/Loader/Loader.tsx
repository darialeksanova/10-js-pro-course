import React from 'react';
import styles from './Loader.module.css';

const Loader = (): JSX.Element => {

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}
export default Loader;