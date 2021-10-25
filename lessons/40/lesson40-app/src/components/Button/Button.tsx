import React, { useContext } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { ThemeContext } from 'ThemeContext';
import { Themes } from 'types/Theme';

type Props = {
  text: string;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
}

const cx = classNames.bind(styles);

const Button = ({ text, size, onClick }: Props): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <button 
      className={cx({
        button: true,
        dark: theme === Themes.dark, 
    }, size)} 
      onClick={onClick}>{text}
    </button>
  );
}

export default Button;