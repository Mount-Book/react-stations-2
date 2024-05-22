//import記述用
import "./css/ThreadList.css";
import { ThreadListView } from "../components/ThreadListView";
import { Header } from "../components/Header";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {
  const page_num = useParams() ?? 0;
  console.log(page_num);
  const nav = useNavigate();

  return (
    <div>
      <Header />
      <h1>新着スレッド</h1>
      <div>
        <ThreadListView offset={page_num} />
      </div>
      <button
        id="nextPage"
        onClick={() => {
          nav(`/?page=${page_num + 1}`);
        }}
      >
        次へ
      </button>
    </div>
  );
};
