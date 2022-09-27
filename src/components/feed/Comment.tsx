import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FatText } from "../shared";
import { Cache } from "./Photo";

const CommentContiner = styled.div`
  margin-bottom: 7px;
`;
const CommentCaption = styled.span`
  margin-left: 10px;
  a {
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
  id?: number;
  isMine?: boolean;
  photoId?: number;
}

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
    }
  }
`;

const Comment = ({ author, caption, id, isMine, photoId }: IProps) => {
  const updateDeleteComment = (cache: Cache, { data }: any) => {
    const {
      deleteComment: { ok },
    } = data;
    if (ok) {
      cache.evict({ id: `Comment:${id}` });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumber(pre: number) {
            return pre - 1;
          },
        },
      });
    }
  };

  const onDeleteClick = () => {
    deleteCommentMutation();
  };
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id,
    },
    update: updateDeleteComment,
  });

  return (
    <CommentContiner>
      <FatText>{author}</FatText>
      <CommentCaption>
        {caption?.split(" ").map((word, index) =>
          /#[\w]+/.test(word) ? (
            <React.Fragment key={index}>
              <Link to={`/hashtags/${word}`}>{word}</Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
      {isMine ? <button onClick={() => onDeleteClick()}>X</button> : null}
    </CommentContiner>
  );
};

export default Comment;
