import { useState } from "react";
import { PostThreadPost } from "../api/PostThreadPost";

export const PostTextBox = (threadId) => {
  const [post, setPost] = useState();
  return (
    <>
      <input
        placeholder="投稿しよう！"
        type="text"
        onChange={(event) => setPost(event.target.value)}
      ></input>
      <button
        id="postButton"
        onClick={() => {
          PostThreadPost({ threadId: threadId, post: post });
        }}
      >
        投稿
      </button>
    </>
  );
};
