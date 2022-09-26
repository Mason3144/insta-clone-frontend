import sanitize from "sanitize-html";
import styled from "styled-components";
import { FatText } from "../shared";

const CommentContiner = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface IProps {
  author: string;
  caption?: string;
}

const Comment = ({ author, caption }: IProps) => {
  const cleanedPayload = sanitize(
    caption?.replace(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g, "<mark>$&</mark>") || "",
    { allowedTags: ["mark"] }
  );

  return (
    <CommentContiner>
      <FatText>{author}</FatText>
      <CommentCaption
        dangerouslySetInnerHTML={{
          __html: cleanedPayload,
        }}
      ></CommentCaption>
    </CommentContiner>
  );
};

export default Comment;
