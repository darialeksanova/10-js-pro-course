import {useState, useEffect, useCallback, useContext} from 'react';
import PostsContainer from 'components/PostsContainer';
import Modal from 'components/Modal';
import Button from 'components/Button';
import AuthorInfo from 'components/AuthorInfo';
import { Author } from 'types/Author';
import { Post } from 'types/Post';
import styles from './Posts.module.css';
import classNames from 'classnames/bind';
import { ThemeContext } from 'ThemeContext';
import { Themes } from 'types/Theme';
import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from 'store/reducers/postsReducer';
import { setAuthors } from 'store/reducers/authorsReducer';
import { setIsDataLoaded } from 'store/reducers/dataLoadedReducer';
import { RootState } from 'store/store';

const cx = classNames.bind(styles);

const Posts = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const authors = useSelector((state: RootState) => state.authors.authors);
  
  const query = new URLSearchParams(location.search);
  const totalPosts = query.get('totalPosts') || '5';

  const [visiblePostsAmount, setVisiblePostsAmount] = useState(Number(totalPosts));
  const [requestedAuthor, setRequestedAuthor] = useState<Author | null>(null);

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response):Promise<Post[]> => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Get posts response is not ok!');
        }),
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response):Promise<Author[]> => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Get users response is not ok!');
        }), 
    ])
    .then(([posts, authors]) => {
      dispatch(setPosts(posts));
      dispatch(setAuthors(authors));
      dispatch(setIsDataLoaded());
    })
    .catch(_error => console.log('Sourse is not reachable!'));
  }, [dispatch]);

  const openAuthorInfoModal = useCallback((requestedAuthorId: number): void => {
    const requestedAuthor = authors[requestedAuthorId];
  
    if (requestedAuthor === undefined) {
      throw new Error('Author not found!');
    }
  
    setRequestedAuthor(requestedAuthor);
  },
  [authors]
  );

  const handleShowMoreClick = useCallback((): void => {
    const query = new URLSearchParams(location.search);
    const totalPosts = query.get('totalPosts') || '5';
    const newTotalPosts = parseInt(totalPosts, 10) + 5;
    query.set('totalPosts', newTotalPosts.toString());

    history.replace(`${location.pathname}?${query.toString()}`);

    setVisiblePostsAmount(prevState => prevState + 5);
  }, [location, history]);

  return (
    <div className={cx({
      container: true,
      dark: theme === Themes.dark,
    })}>
      <h1 className={styles.title}>POSTS</h1>
      <PostsContainer 
        openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
        visiblePostsAmount={visiblePostsAmount}
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
        onClick={handleShowMoreClick} 
        text='Show more'
        size='medium'
      />
    </div>
  );
}

export default Posts;