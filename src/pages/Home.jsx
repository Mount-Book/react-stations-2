//import記述用
import "./css/ThreadList.css";
import { ThreadListView } from "../components/ThreadListView";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="pageTitle">新着スレッド</h1>
      <div>
        <ThreadListView />
      </div>
    </div>
  );
};
