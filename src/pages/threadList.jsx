//import記述用
import "./css/threadList.css";
import { ThreadListView } from "../components/threadListView";

export const ThreadList = () => {
  return (
    <div>
      <h1>新着スレッド</h1>
      <div>
        <ThreadListView />
      </div>
    </div>
  );
};
