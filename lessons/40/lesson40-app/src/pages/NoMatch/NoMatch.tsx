import styles from './NoMatch.module.css';
import classNames from 'classnames/bind';
import { Theme } from 'types/Theme';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const cx = classNames.bind(styles);

const NoMatch = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={cx({
      noMatch: true,
      dark: currentTheme === Theme.dark,
    })}>
      <h1 className={styles.error}>404</h1>
      <h2 className={styles.message}>Oops! Page not found :c</h2>
    </div>
  );
}

export default NoMatch;