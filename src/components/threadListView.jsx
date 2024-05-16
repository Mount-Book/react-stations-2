//import記述用
import { ThreadListApi } from "../api/threadListApi";
import { useEffect, useState } from "react";

export const ThreadListView = () => {
  const [res, setRes] = useState();
  useEffect(() => {
    setRes(ThreadListApi());
  }, []);

  console.log(res);
};
