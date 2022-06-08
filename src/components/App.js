import React from 'react'
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};
