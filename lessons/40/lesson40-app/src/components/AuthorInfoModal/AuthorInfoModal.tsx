import React, {useContext} from 'react';
import './AuthorInfoModal.css';
import { AuthorInfo } from 'types/AuthorInfo';
import { ThemeContext } from 'App';

type Props = {
  closeAuthorInfoModal: () => void;
  authorInfo: AuthorInfo;
}

const AuthorInfoModal = (props: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className='modal-overlay'>
      <div className='modal-overlay__backdrop' onClick={props.closeAuthorInfoModal}></div>
      <div className={`modal-overlay__window modal-overlay__window_${theme}`}>
        <h3 className='author-name'>{props.authorInfo.name}</h3>
        <div className='author-info'>
          <div className='author-address'>Address: {props.authorInfo.address.city}, {props.authorInfo.address.street}, {props.authorInfo.address.suite}</div>
          <div className='author-contacts'>
            <span className='author-email'>E-mail: {props.authorInfo.email}</span>
            <span className='author-tel'>Tel: {props.authorInfo.phone}</span>
          </div>
        </div>
        <div className='modal-actions'>
          <button className='close-modal-button' onClick={props.closeAuthorInfoModal}>Close</button>
        </div>
      </div>
    </div>
  );
}
export default AuthorInfoModal;