import {useState, useCallback, useContext, useEffect} from 'react';
import PostsContainer from 'components/PostsContainer';
import Modal from 'components/Modal';
import Button from 'components/Button';
import AuthorInfo from 'components/AuthorInfo';
import { Author } from 'types/Author';
import styles from './Posts.module.css';
import classNames from 'classnames/bind';
import { ThemeContext } from 'ThemeContext';
import { Themes } from 'types/Theme';
import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Loader from 'components/Loader';
import { loadPosts } from 'store/posts/actions';
import { loadAuthors } from 'store/authors/actions';

const cx = classNames.bind(styles);

const Posts = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const authors = useSelector((state: RootState) => state.authors.authors);
  const arePostsLoaded = useSelector((state: RootState) => state.posts.arePostsLoaded);
  
  const query = new URLSearchParams(location.search);
  const totalPosts = query.get('totalPosts') || '5';

  const [visiblePostsAmount, setVisiblePostsAmount] = useState(Number(totalPosts));
  const [requestedAuthor, setRequestedAuthor] = useState<Author | null>(null);

  useEffect(() => {
    dispatch(loadPosts());
    dispatch(loadAuthors());
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
    <>
      {!arePostsLoaded && <Loader />}
      <div className={cx({
        container: true,
        dark: theme === Themes.dark,
        visible: arePostsLoaded,
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
    </>
  );
}

export default Posts;