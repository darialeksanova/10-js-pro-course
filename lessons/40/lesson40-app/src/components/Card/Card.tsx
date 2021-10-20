import React from 'react';
import styles from './Card.module.css';
import { Themes } from 'types/Theme';
import classNames from 'classnames/bind';

type Props = {
  children: React.ReactNode;
  size?: 'small' | 'madium' | 'large';
  theme: Themes;
};

const cx = classNames.bind(styles);

const Card = ({ children, size, theme }: Props): JSX.Element => {
  const classNames = cx({
    card: true,
    card_dark: theme === 'dark',
  }, size);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}
export default Card;