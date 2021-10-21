import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { Themes } from 'types/Theme';

type Props = {
  text: string;
  theme: Themes;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
}

const cx = classNames.bind(styles);

const Button = ({text, theme, size, onClick}: Props): JSX.Element => {
  return (
    <button 
      className={cx({
        button: true,
        dark: theme === 'dark', 
    }, size)} 
      onClick={onClick}>{text}
    </button>
  );
}

export default Button;