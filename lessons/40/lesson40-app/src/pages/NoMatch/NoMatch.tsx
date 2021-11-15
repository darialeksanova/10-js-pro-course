import { useContext } from 'react';
import styles from './NoMatch.module.css';
import classNames from 'classnames/bind';
import { Themes } from 'types/Theme';
import { ThemeContext } from 'ThemeContext';

const cx = classNames.bind(styles);

const NoMatch = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={cx({
      noMatch: true,
      dark: theme === Themes.dark,
    })}>
      <h1 className={styles.error}>404</h1>
      <h2 className={styles.message}>Oops! Page not found :c</h2>
    </div>
  );
}

export default NoMatch;