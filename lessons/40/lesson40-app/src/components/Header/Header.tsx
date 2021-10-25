import { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from 'ThemeContext';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import { Themes } from 'types/Theme';
import Button from 'components/Button';

type Props = {
  handleThemeToggleClick: (themeValue: Themes) => void;
}

const cx = classNames.bind(styles);

const Header = ({ handleThemeToggleClick }: Props): JSX.Element => {
  const theme = useContext(ThemeContext);
  const toggleThemeButtonText = useMemo<Themes>(() => theme === Themes.light ? Themes.dark : Themes.light, [theme]);

  return (
    <header className={cx({
      header: true,
      dark: theme === Themes.dark,
    })}>
      <Button 
        onClick={() => handleThemeToggleClick(theme)} 
        text={`${toggleThemeButtonText} mode`}
        size='small'
      /> 
      <ul className={styles.navigation}>
        <li><NavLink exact to='/posts' className={styles.navLink} activeClassName={styles.selected}>Posts</NavLink></li>
        <li><NavLink exact to='/users' className={styles.navLink} activeClassName={styles.selected}>Users</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;