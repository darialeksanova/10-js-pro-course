import {useContext} from 'react';
import styles from './Modal.module.css';
import Button from 'components/Button';
import { ThemeContext } from 'ThemeContext';
import classNames from 'classnames/bind';
import { Themes } from 'types/Theme';

type Props = {
  closeModal: () => void;
  children: JSX.Element;
  size?: 'small' | 'medium' | 'large';
}

const cx = classNames.bind(styles);

const Modal = ({closeModal, children, size}: Props): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <div className={cx({
        modal: true,
        dark: theme === Themes.dark,
      }, size)}>
        <div className={styles.modalContent}>
          {children}
        </div>
        <div className={styles.modalActions}>
          <Button 
            onClick={closeModal} 
            text='Close'
            size='small'
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
