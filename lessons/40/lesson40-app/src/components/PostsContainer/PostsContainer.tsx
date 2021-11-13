import styles from './PostsContainer.module.css';
import Card from 'components/Card';
import CardContent from 'components/CardContent';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type Props = {
  openAuthorInfoModal: (requestedUserID: number) => void;
  visiblePostsAmount: number;
}

const PostsContainer = ({openAuthorInfoModal, visiblePostsAmount}: Props): JSX.Element => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <div className={styles.postsСontainer}>
      {posts.slice(0, visiblePostsAmount).map(post => {
        return (
          <Card 
            key={post.id}
            size='medium'
          >
            <CardContent 
              openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
              post={post}
            />
          </Card>
        ) 
      })}
    </div>
  );
}
export default PostsContainer;