import React, {useState, useEffect, useCallback, createContext} from 'react';
import './App.css';
import PostsContainer from 'components/PostsContainer';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import { Post } from 'types/Post';
import { Author } from 'types/Author';
import { Themes } from 'types/Theme';
import AuthorInfo from 'components/AuthorInfo';

export const ThemeContext = createContext<Themes>(Themes.light);

const App = () => {
  const [requestedAuthor, setRequestedAuthor] = useState<Author | null>(null);
  const [visiblePostsAmount, setVisiblePostsAmount] = useState(5);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [theme, setTheme] = useState<Themes>(Themes.light);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Error on posts fetch!');
    })
    .then((posts: Post[]) => {
      setPosts(posts);
      setIsDataLoaded(true);
    })
    .catch(_error => console.log('Source is not reachable!'));

    fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Error on users fetch!');
    })
    .then(authorsInfo => setAuthors(authorsInfo))
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
    

  const changeThemeButtonText = useCallback(() => theme === Themes.light ? Themes.dark : Themes.light, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App App_${theme}`}>
        {!isDataLoaded && <Loader />}
        {isDataLoaded && (
          <>
            <button className='change-theme-button' onClick={() => setTheme(theme === Themes.light ? Themes.dark : Themes.light)}>{changeThemeButtonText()} mode</button>
            <PostsContainer 
              openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
              visiblePostsAmount={visiblePostsAmount}
              posts={posts}
              authors={authors}
            />
            {requestedAuthor && (
            <Modal closeModal={() => setRequestedAuthor(null)}> 
              <AuthorInfo authorData={requestedAuthor}></AuthorInfo>
            </Modal>
            )}
            <button className='show-more-button' onClick={() => setVisiblePostsAmount(prevState => prevState + 5)}>Show more</button>
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
