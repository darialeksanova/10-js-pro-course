import React, {useEffect} from 'react';
import './App.css';
import PostsContainer from 'components/PostsContainer/PostsContainer';
import AuthorInfoModal from 'components/AuthorInfoModal/AuthorInfoModal';
import Loader from 'components/Loader/Loader';
import { PostType } from 'types/PostType';
import { AuthorInfoType } from 'types/AuthorInfoType';
import { Theme } from 'types/Theme';

export const ThemeContext = React.createContext<Theme>('light');

function App() {
  const [requestedAuthor, setRequestedAuthor] = React.useState<AuthorInfoType | null>(null);
  const [visiblePostsAmount, setVisiblePostsAmount] = React.useState(5);
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const [authors, setAuthors] = React.useState<AuthorInfoType[]>([]);
  const [theme, setTheme] = React.useState<Theme>('light');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      console.log(response);

      throw new Error('Error on posts fetch!');
    })
    .then((posts: PostType[]) => setPosts(posts))
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

  function openAuthorInfoModal(requestedAuthorId: number): void {
    const requestedAuthor = authors.find((author) => author.id === requestedAuthorId);

    if (requestedAuthor === undefined) {
      throw new Error('Author not found!');
    }

    setRequestedAuthor(requestedAuthor);
  }

  const changeThemeButtonText = () => theme === 'light' ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App App_${theme}`}>
        {posts.length === 0 && <Loader />}
        {posts.length !== 0 && (
          <>
            <button className='change-theme-button' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{changeThemeButtonText()} mode</button>
            <PostsContainer 
              openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
              visiblePostsAmount={visiblePostsAmount}
              posts={posts}
              authors={authors}
            />
            {requestedAuthor && (
            <AuthorInfoModal 
              authorInfo={requestedAuthor}
              closeAuthorInfoModal={() => setRequestedAuthor(null)} 
            />
            )}
            <button className='show-more-button' onClick={() => setVisiblePostsAmount(prevState => prevState + 5)}>Show more</button>
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
