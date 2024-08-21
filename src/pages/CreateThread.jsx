import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "../components/Header";
import { PostNewThread } from "../api/PostNewThread";
import "./css/CreateThread.css";

export const CreateThread = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState();

  return (
    <div className="createThreadPage">
      <Header />
      <h1 className="pageTitle">スレッド新規作成</h1>
      <input
        type="text"
        placeholder="スレッドタイトル"
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <div>
        <button
          id="backHome"
          onClick={() => {
            nav("/");
          }}
        >
          トップに戻る
        </button>
        <button
          id="newThread"
          onClick={async () => {
            if (title) {
              await PostNewThread(title);
              nav("/");
            }
          }}
        >
          作成
        </button>
      </div>
    </div>
  );
};
