import Post from "../model/Post";

interface PostItemProps {
  item: Post & { username: string; userPhoto: string };
  toggleLike: (postId: string) => void;
  userUid: string | null;
  deletePost: (postId: string) => void;
  sharePost: (title: string, content: string) => void;
}

export default PostItemProps;
