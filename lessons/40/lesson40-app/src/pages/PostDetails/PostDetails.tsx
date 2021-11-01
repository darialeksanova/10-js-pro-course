import { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Post } from 'types/Post';
import styles from './PostDetails.module.css';
import classNames from 'classnames/bind';
import { Comment } from 'types/Comment';
import PostComment from 'components/PostComment';
import { ThemeContext } from 'ThemeContext';
import { Themes } from 'types/Theme';

type Props = {
  setIsDataLoaded: () => void;
};

type URLParams = {
  postId: string;
};

const cx = classNames.bind(styles);

const PostDetails = ({ setIsDataLoaded }: Props) => {
  const theme = useContext(ThemeContext);
  const params = useParams<URLParams>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);
  const history = useHistory();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((response): Promise<Post> => response.json()),
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
      .then((response): Promise<Comment[]> => response.json())
    ])
    .then(([post, comments]) => {
      setPost(post);
      setComments(comments);
      setIsDataLoaded();
    })
    .catch(_error => {
      console.log('Sourse is not reachable!');
      history.replace('/posts');
    });
  }, [setIsDataLoaded, params, history]);

  return (
    <>
      <div className={cx({
        postDetails: true,
        dark: theme === Themes.dark,
      })}>
        <h1 className={styles.postTitle}>{post?.title}</h1>
        <div className={styles.postContent}>{post?.body}</div>
      </div>
      <div className={cx({
        postComments: true,
        dark: theme === Themes.dark,
      })}>
        <h2 className={styles.commentsTitle}>Comments</h2>
        <div className={styles.commentsContent}>
        {
          comments?.map(comment => {
            return <PostComment comment={comment} key={comment.id}/>
          })
        }
        </div>
      </div>
    </>
  );
}

export default PostDetails;