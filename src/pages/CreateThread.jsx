import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import "./css/CreateThread.css";

export const CreateThread = () => {
  const nav = useNavigate();

  return (
    <div className="createThreadPage">
      <Header />
      <h1>スレッド新規作成</h1>
      <input type="text" placeholder="スレッドタイトル"></input>
      <div>
        <button
          onClick={() => {
            nav("/");
          }}
        >
          トップに戻る
        </button>
        <button>作成</button>
      </div>
    </div>
  );
};
