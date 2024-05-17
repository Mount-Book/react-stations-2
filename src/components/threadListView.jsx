//import記述用
import { ThreadListApi } from "../api/threadListApi";
import { useEffect, useState } from "react";

export const ThreadListView = () => {
  const [threadData, setThreadData] = useState([]);
  useEffect(() => {
    ThreadListApi().then((response) => {
      setThreadData(response);
    });
  }, []);

  console.log(threadData);

  return (
    <div>
      {threadData.map((item) => (
        <div name="thread" key={item.id}>
          <p id={item.id}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
