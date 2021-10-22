import React, {useState, useEffect, useCallback, useMemo} from 'react';
import styles from './App.module.css';
import { ThemeContext } from './ThemeContext';
import PostsContainer from 'components/PostsContainer';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import { Post } from 'types/Post';
import { Author } from 'types/Author';
import { Themes } from 'types/Theme';
import AuthorInfo from 'components/AuthorInfo';
import Button from 'components/Button';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const App = (): JSX.Element => {
  const [requestedAuthor, setRequestedAuthor] = useState<Author | null>(null);
  const [visiblePostsAmount, setVisiblePostsAmount] = useState(5);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [theme, setTheme] = useState<Themes>(Themes.light);

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response):Promise<Post[]> => response.json()),
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response):Promise<Author[]> => response.json()), 
    ])
    .then(([posts, authors]) => {
      setPosts(posts);
      setAuthors(authors);
      setIsDataLoaded(true);
    })
    .catch(_error => console.log('Sourse is not reachable!'));
  }, []);

  const openAuthorInfoModal = useCallback((requestedAuthorId: number): void => {
      const requestedAuthor = authors.find((author) => author.id === requestedAuthorId);
  
      if (requestedAuthor === undefined) {
        throw new Error('Author not found!');
      }
  
      setRequestedAuthor(requestedAuthor);
    },
    [authors]
  );

  const changeThemeButtonText = useMemo<Themes>(() => theme === Themes.light ? Themes.dark : Themes.light, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={cx({
          App: true,
          dark: theme === 'dark',
        })}>
        {!isDataLoaded && <Loader />}
        {isDataLoaded && (
          <>
            <Button 
              onClick={() => setTheme(theme === Themes.light ? Themes.dark : Themes.light)} 
              text={`${changeThemeButtonText} mode`}
              size='medium'
            /> 
            <PostsContainer 
              openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
              visiblePostsAmount={visiblePostsAmount}
              posts={posts}
              authors={authors}
            />
            {requestedAuthor && (
            <Modal 
              closeModal={() => setRequestedAuthor(null)}
              size='medium'
            > 
              <AuthorInfo authorData={requestedAuthor}></AuthorInfo>
            </Modal>
            )}
            <Button 
              onClick={() => setVisiblePostsAmount(prevState => prevState + 5)} 
              text='Show more'
              size='medium'
            />
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
