import React, {useContext} from 'react';
import './Modal.css';
import { ThemeContext } from 'App';

type Props = {
  closeModal: () => void;
  children: JSX.Element;
}

const Modal = ({closeModal, children}: Props): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <div className='modal-overlay'>
      <div className='modal-overlay__backdrop' onClick={closeModal}></div>
      <div className={`modal-overlay__window modal-overlay__window_${theme}`}>
        <div className='modal-content'>
          {children}
        </div>
        <div className='modal-actions'>
          <button className='close-modal-button' onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
