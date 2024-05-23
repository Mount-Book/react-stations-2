import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { GetThreadPosts } from "../api/GetThreadPosts";
import { useEffect, useState } from "react";

export const Thread = (prop) => {
  const threadId = useParams().thread_id;
  const [postList, setPostList] = useState([]);
  console.log(threadId);
  useEffect(() => {
    GetThreadPosts(threadId).then((data) => {
      setPostList(data.posts);
    });
  }, [threadId]);

  return (
    <>
      <Header />
      <h1>ここにタイトルが入る</h1>
      <input placeholder="投稿しよう！" type="text"></input>
      <button>投稿</button>
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
