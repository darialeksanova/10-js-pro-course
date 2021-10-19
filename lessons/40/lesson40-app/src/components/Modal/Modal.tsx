import React, {useContext} from 'react';
import styles from './Modal.module.css';
import { ThemeContext } from 'App';

type Props = {
  closeModal: () => void;
  children: JSX.Element;
}

const Modal = ({closeModal, children}: Props): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-overlay__backdrop']} onClick={closeModal}></div>
      {/* <div className={styles[`modal-overlay__window modal-overlay__window_${theme}`]}> */}
      <div className={styles['modal-overlay__window']}>
        <div className={styles['modal-content']}>
          {children}
        </div>
        <div className={styles['modal-actions']}>
          <button className={styles['close-modal-button']} onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
