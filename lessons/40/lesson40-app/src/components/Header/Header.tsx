import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import { Theme } from 'types/Theme';
import Button from 'components/Button';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type Props = {
  handleThemeToggleClick: (themeValue: Theme) => void;
}

const cx = classNames.bind(styles);

const Header = ({ handleThemeToggleClick }: Props): JSX.Element => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const toggleThemeButtonText = useMemo<Theme>(() => currentTheme === Theme.light ? Theme.dark : Theme.light, [currentTheme]);

  return (
    <header className={cx({
      header: true,
      dark: currentTheme === Theme.dark,
    })}>
      <Button 
        onClick={() => handleThemeToggleClick(currentTheme)} 
        text={`${toggleThemeButtonText} mode`}
        size='small'
      /> 
      <ul className={styles.navigation}>
        <li><NavLink end to='/posts' className={({isActive}) => styles.navLink + (isActive? styles.selected : '')}>Posts</NavLink></li>
        <li><NavLink end to='/users' className={({isActive}) => styles.navLink + (isActive? styles.selected : '')}>Users</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;