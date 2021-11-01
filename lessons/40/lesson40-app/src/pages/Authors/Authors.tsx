import { useContext, useEffect, useState, useCallback } from 'react';
import styles from './Authors.module.css'
import { Author } from 'types/Author';
import { ThemeContext } from 'ThemeContext';
import classNames from 'classnames/bind';
import Modal from 'components/Modal';
import AuthorInfo from 'components/AuthorInfo';
import { Themes } from 'types/Theme';

type Props = {
  setIsDataLoaded: () => void;
};

const cx = classNames.bind(styles);

const Authors = ({ setIsDataLoaded }: Props) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [requestedAuthor, setRequestedAuthor] = useState<Author | null>(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response):Promise<Author[]> => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Get users response is not ok!');
      }) 
      .then( authors => {
        setAuthors(authors);
        setIsDataLoaded();
      })
    .catch(_error => console.log('Sourse is not reachable!'));
  }, [setIsDataLoaded]);

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
    <div className={cx({
      container: true,
      dark: theme === Themes.dark,
    })}>
      <h1 className={styles.title}>USERS</h1>
      <ul className={styles.usersList}>
        {authors.map(author => {
          return (
            <button key={author.id} className={styles.userInfoButton} onClick={() => openAuthorInfoModal(author.id)}>{author.name}</button>
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
  );
}

export default Authors;