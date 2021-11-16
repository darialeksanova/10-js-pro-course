import React from 'react';
import styles from './Card.module.css';
import classNames from 'classnames/bind';
import { Theme } from 'types/Theme';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type Props = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const cx = classNames.bind(styles);

const Card = ({ children, size }: Props): JSX.Element => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={cx({
      card: true,
      dark: currentTheme === Theme.dark,
    }, size)}>
      {children}
    </div>
  );
}
export default Card;