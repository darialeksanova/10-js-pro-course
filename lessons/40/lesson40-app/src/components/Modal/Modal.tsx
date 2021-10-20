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
  const classNames = cx({
    modal: true,
    modal_dark: theme === 'dark',
  }, size);

  return (
    <div className={styles['overlay']}>
      <div className={styles['backdrop']} onClick={closeModal}></div>
      <div className={classNames}>
        <div className={styles['modal-content']}>
          {children}
        </div>
        <div className={styles['modal-actions']}>
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
