import { useEffect } from 'react';
import styles from './NoMatch.module.css';

type Props = {
  setIsDataLoaded: () => void;
}

const NoMatch = ({ setIsDataLoaded }: Props) => {
  useEffect(() => {
    setIsDataLoaded();
  }, [setIsDataLoaded]);

  return (
    <div className={styles.noMatch}>
      <h1 className={styles.error}>404</h1>
      <h2 className={styles.message}>Oops! Page not found :c</h2>
    </div>
  );
}

export default NoMatch;