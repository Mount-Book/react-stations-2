import { useLocation, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { GetThreadPosts } from "../api/GetThreadPosts";
import { useEffect, useState } from "react";
import { PostThreadPost } from "../api/PostThreadPost";
import "./css/Thread.css";

export const Thread = () => {
  const threadId = useParams().thread_id;
  const location = useLocation();
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState();
  const title = location.state.title;

  console.log(location);
  console.log(title);

  useEffect(() => {
    GetThreadPosts(threadId).then((data) => {
      setPostList(data.posts);
    });
  }, [threadId]);

  const onChangeText = (e) => {
    setPost(e.target.value);
  };

  return (
    <>
      <Header />
      <h1>{title}</h1>
      <input
        placeholder="投稿しよう！"
        type="text"
        value={post}
        onChange={onChangeText}
      ></input>
      <button
        id="postButton"
        onClick={async () => {
          await PostThreadPost({ threadId: threadId, post: post });
          setPost("");
          GetThreadPosts(threadId).then((data) => {
            setPostList(data.posts);
          });
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
