import { useState, useCallback, useEffect } from 'react';
import styles from './Authors.module.css'
import { Author } from 'types/Author';
import classNames from 'classnames/bind';
import Modal from 'components/Modal';
import AuthorInfo from 'components/AuthorInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Loader from 'components/Loader';
import { loadAuthors } from 'store/authors/actions';
import { Theme } from 'types/Theme';

const cx = classNames.bind(styles);

const Authors = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const authors = useSelector((state: RootState) => state.authors.authors);
  const areAuthorsLoaded = useSelector((state: RootState) => state.authors.areAuthorsLoaded);
  const [requestedAuthor, setRequestedAuthor] = useState<Author | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuthors());
  }, [dispatch]);

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
        dark: currentTheme === Theme.dark,
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