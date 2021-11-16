import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import styles from './PostDetails.module.css';
import classNames from 'classnames/bind';
import { Comment } from 'types/Comment';
import PostComment from 'components/PostComment';
import { Theme } from 'types/Theme';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type URLParams = {
  postId: string;
};

const cx = classNames.bind(styles);

const PostDetails = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const params = useParams<URLParams>();
  const selectedPost = posts.find(post => post.id === Number(params.postId));
  const [comments, setComments] = useState<Comment[] | null>(null);
  const history = useHistory();

  useEffect(() => {
    if (selectedPost) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}/comments`)
        .then((response): Promise<Comment[]> => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Get post comments by id response is not ok!');
        })
      .then((comments) => {
        setComments(comments);
      })
      .catch(_error => {
        console.log('Sourse is not reachable!');
        history.replace('/posts');
      });
    }
  }, [params, history, selectedPost]);

  return (
    <>
      <div className={cx({
        postDetails: true,
        dark: currentTheme === Theme.dark,
      })}>
        <h1 className={styles.postTitle}>{selectedPost?.title}</h1>
        <div className={styles.postContent}>{selectedPost?.body}</div>
      </div>
      <div className={cx({
        postComments: true,
        dark: currentTheme === Theme.dark,
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