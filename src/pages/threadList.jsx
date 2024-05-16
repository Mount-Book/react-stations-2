//import記述用
import { ThreadListView } from "../components/threadListView";
import { useState } from "react";

export const ThreadList = () => {
  return (
    <>
      <h1>新着スレッド</h1>
      <ThreadListView />
    </>
  );
};
