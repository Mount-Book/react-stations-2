//import記述用
import { GetThreadList } from "../api/GetThreadList";
import { useEffect, useState } from "react";

export const ThreadListView = () => {
  const [threadData, setThreadData] = useState([]);
  useEffect(() => {
    GetThreadList().then((response) => {
      setThreadData(response);
    });
  }, []);

  console.log(threadData);

  return (
    <div className="threadList">
      {threadData.map((item) => (
        <div className="thread" key={item.id}>
          <p id={item.id}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
