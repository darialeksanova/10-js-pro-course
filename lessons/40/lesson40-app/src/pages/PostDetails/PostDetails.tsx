import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import styles from './PostDetails.module.css';
import classNames from 'classnames/bind';
import { Comment } from 'types/Comment';
import PostComment from 'components/PostComment';
import { Theme } from 'types/Theme';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Post } from 'types/Post';

type URLParams = {
  postId: string;
};

const cx = classNames.bind(styles);

const PostDetails = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const params = useParams<URLParams>();
  const history = useHistory();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);

  const getPostById = (postId: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response): Promise<Post> => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Get post by id response is not ok!');
      });
  };

  const getPostComments = (postId: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response): Promise<Comment[]> => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Get post comments response is not ok!');
      });
  };

  useEffect(() => {
    getPostById(params.postId)
      .then(post => {
        setSelectedPost(post);
        getPostComments(params.postId)
        .then((comments) => {
          setComments(comments);
        })
        .catch(_error => {
          console.log('Sourse is not reachable!');
          history.replace('/posts');
        });
      })
      .catch(_error => {
        console.log('Sourse is not reachable!');
        history.replace('/posts');
      });
  }, [params, history]);

  return (
    <>
      {selectedPost && (
        <>
          <div className={cx({
            postDetails: true,
            dark: currentTheme === Theme.dark,
          })}>
            <h1 className={styles.postTitle}>{selectedPost.title}</h1>
            <div className={styles.postContent}>{selectedPost.body}</div>
          </div>
          {comments && (
            <div className={cx({
              postComments: true,
              dark: currentTheme === Theme.dark,
            })}>
              <h2 className={styles.commentsTitle}>Comments</h2>
              <div className={styles.commentsContent}>
              {
                comments.map(comment => {
                  return <PostComment comment={comment} key={comment.id}/>
                })
              }
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default PostDetails;