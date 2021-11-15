import { useContext, useState, useCallback } from 'react';
import styles from './Authors.module.css'
import { Author } from 'types/Author';
import { ThemeContext } from 'ThemeContext';
import classNames from 'classnames/bind';
import Modal from 'components/Modal';
import AuthorInfo from 'components/AuthorInfo';
import { Themes } from 'types/Theme';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Loader from 'components/Loader';

const cx = classNames.bind(styles);

const Authors = () => {
  const authors = useSelector((state: RootState) => state.authors.authors);
  const areAuthorsLoaded = useSelector((state: RootState) => state.areAuthorsLoaded.areAuthorsLoaded);
  const [requestedAuthor, setRequestedAuthor] = useState<Author | null>(null);
  const theme = useContext(ThemeContext);

  const openAuthorInfoModal = useCallback((authorId: number): void => {
    const requestedAuthor = authors.find((author) => author.id === authorId);
  
    if (requestedAuthor === undefined) {
      throw new Error('User not found!');
    }
  
    setRequestedAuthor(requestedAuthor);
  },
  [authors]
  );

  return (
    <>
      {!areAuthorsLoaded && <Loader />}
      <div className={cx({
        container: true,
        dark: theme === Themes.dark,
        visible: areAuthorsLoaded,
      })}>
        <h1 className={styles.title}>USERS</h1>
        <ul className={styles.authorsList}>
          {authors.map(author => {
            return (
              <button key={author.id} className={styles.authorInfoButton} onClick={() => openAuthorInfoModal(author.id)}>{author.name}</button>
          )})}
        </ul>
        {requestedAuthor && (
        <Modal 
          closeModal={() => setRequestedAuthor(null)}
          size='medium'
        > 
          <AuthorInfo authorData={requestedAuthor}></AuthorInfo>
        </Modal>
        )}
      </div>
    </>
  );
}

export default Authors;