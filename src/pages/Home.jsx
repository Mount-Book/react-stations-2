//import記述用
import "./css/ThreadList.css";
import { ThreadListView } from "../components/ThreadListView";
import { Header } from "../components/Header";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {
  const [page, setPage] = useState(useParams().page_num ?? 0);
  console.log(isNaN(page));
  if (isNaN(page)) setPage(0);
  console.log(page);
  const nav = useNavigate();

  return (
    <div>
      <Header />
      <h1>新着スレッド</h1>
      <div>
        <ThreadListView offset={page} />
      </div>
      <button
        id="nextPage"
        onClick={() => {
          nav(`/${Number(page) + 1}`);
        }}
      >
        次へ
      </button>
    </div>
  );
};
