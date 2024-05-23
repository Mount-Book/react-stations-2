import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { GetThreadPosts } from "../api/GetThreadPosts";
import { useEffect, useState } from "react";
import { PostThreadPost } from "../api/PostThreadPost";
import "./css/Thread.css";

export const Thread = () => {
  const threadId = useParams().thread_id;
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState();
  useEffect(() => {
    GetThreadPosts(threadId).then((data) => {
      setPostList(data.posts);
    });
  }, [threadId]);

  return (
    <>
      <Header />
      <h1>ここにタイトルが入る</h1>
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
      <div className="postList">
        {postList.map((item) => (
          <div className="post" key={item.id}>
            <p>{item.post}</p>
          </div>
        ))}
      </div>
    </>
  );
};
