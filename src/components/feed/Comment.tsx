import styled from "styled-components";
import { FatText } from "../shared";

const CommentContiner = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;
`;

interface IProps {
  author: string;
  caption?: string;
}

const Comment = ({ author, caption }: IProps) => {
  return (
    <CommentContiner>
      <FatText>{author}</FatText>
      <CommentCaption>{caption}</CommentCaption>
    </CommentContiner>
  );
};

export default Comment;
