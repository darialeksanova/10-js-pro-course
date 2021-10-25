import React, { useContext } from 'react';
import styles from './Card.module.css';
import classNames from 'classnames/bind';
import { ThemeContext } from 'ThemeContext';
import { Themes } from 'types/Theme';

type Props = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const cx = classNames.bind(styles);

const Card = ({ children, size }: Props): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <div className={cx({
      card: true,
      dark: theme === Themes.dark,
    }, size)}>
      {children}
    </div>
  );
}
export default Card;