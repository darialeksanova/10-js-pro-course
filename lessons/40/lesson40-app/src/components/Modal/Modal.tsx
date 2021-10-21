import React from 'react';
import styles from './Modal.module.css';
import Button from 'components/Button';
import { Themes } from 'types/Theme';
import classNames from 'classnames/bind';

type Props = {
  closeModal: () => void;
  children: JSX.Element;
  theme: Themes;
  size?: 'small' | 'medium' | 'large';
}

const cx = classNames.bind(styles);

const Modal = ({closeModal, children, theme, size}: Props): JSX.Element => {

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <div className={cx({
        modal: true,
        dark: theme === 'dark',
      }, size)}>
        <div className={styles.modalContent}>
          {children}
        </div>
        <div className={styles.modalActions}>
          <Button 
            onClick={closeModal} 
            text='Close'
            theme={theme}
            size='small'
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
