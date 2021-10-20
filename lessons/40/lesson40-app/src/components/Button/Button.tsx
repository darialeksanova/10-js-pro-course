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

  const className = cx({
    button: true,
    button_dark: theme === 'dark', 
  }, size);

  return (
    <button className={className} onClick={onClick}>{text}</button>
  );
}

export default Button;