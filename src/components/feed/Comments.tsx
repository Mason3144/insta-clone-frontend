import styled from "styled-components";
import Comment from "./Comment";

const CommentsContainer = styled.div`
  margin-top: 30px;
`;

const CommentCount = styled.span`
  opacity: 0.7;
  margin: 10px 0;
  display: block;
  font-weight: 600;
  font-size: 12px;
`;

interface User {
  avatar: string;
  username: string;
}
interface UserComments {
  id: number;
  payload: string;
  isMine: boolean;
  createdAt: string;
  user: User;
}

interface IProps {
  author: string;
  caption?: string;
  comments: UserComments[];
  commentNumber: number;
}

const Comments = ({ author, caption, commentNumber, comments }: IProps) => {
  return (
    <CommentsContainer>
      <Comment author={author} caption={caption} />
      <CommentCount>
        {commentNumber === 1 ? "1 comment" : `${commentNumber} comments`}
      </CommentCount>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.user.username}
          caption={comment.payload}
        />
      ))}
    </CommentsContainer>
  );
};
export default Comments;
