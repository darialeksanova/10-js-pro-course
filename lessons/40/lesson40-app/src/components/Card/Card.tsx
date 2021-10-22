import React, { useContext } from 'react';
import styles from './Card.module.css';
import classNames from 'classnames/bind';
import { ThemeContext } from 'ThemeContext';

type Props = {
  children: React.ReactNode;
  size?: 'small' | 'madium' | 'large';
};

const cx = classNames.bind(styles);

const Card = ({ children, size }: Props): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <div className={cx({
      card: true,
      dark: theme === 'dark',
    }, size)}>
      {children}
    </div>
  );
}
export default Card;