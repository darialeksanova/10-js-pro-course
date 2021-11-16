import styles from './Modal.module.css';
import Button from 'components/Button';
import classNames from 'classnames/bind';
import { Theme } from 'types/Theme';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type Props = {
  closeModal: () => void;
  children: JSX.Element;
  size?: 'small' | 'medium' | 'large';
}

const cx = classNames.bind(styles);

const Modal = ({closeModal, children, size}: Props): JSX.Element => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <div className={cx({
        modal: true,
        dark: currentTheme === Theme.dark,
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
