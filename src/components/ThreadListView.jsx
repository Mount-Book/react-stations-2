//import記述用
import { useNavigate } from "react-router-dom";
import { GetThreadList } from "../api/GetThreadList";
import { useEffect, useState } from "react";

export const ThreadListView = (prop) => {
  const [threadData, setThreadData] = useState([]);
  const offset = prop;
  const nav = useNavigate();
  useEffect(() => {
    GetThreadList(offset).then((response) => {
      setThreadData(response);
    });
  }, []);

  console.log(threadData);

  return (
    <div className="threadList">
      {threadData.map((item) => (
        <div className="thread" key={item.id}>
          <button
            className="threadButton"
            onClick={() => {
              nav(`/threads/:${item.id}`);
            }}
          >
            <p id={item.id}>{item.title}</p>
          </button>
        </div>
      ))}
    </div>
  );
};
