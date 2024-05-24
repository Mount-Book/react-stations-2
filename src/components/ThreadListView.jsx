//import記述用
import { useNavigate } from "react-router-dom";
import { GetThreadList } from "../api/GetThreadList";
import { useEffect, useState } from "react";

export const ThreadListView = () => {
  const [threadData, setThreadData] = useState([]);
  const [page, setPage] = useState(0);
  const nav = useNavigate();
  useEffect(() => {
    GetThreadList(page).then((response) => {
      setThreadData(response);
    });
  }, [page]);

  return (
    <div>
      <div className="threadList">
        {threadData.map((item) => (
          <div className="thread" key={item.id}>
            <button
              className="threadButton"
              onClick={() => {
                nav(`/threads/${item.id}`, { state: { title: item.title } });
              }}
            >
              <p id={item.id}>{item.title}</p>
            </button>
          </div>
        ))}
      </div>
      <div className="pageButton">
        <div className="pagination-item">
          <button
            id="prevButton"
            className={page >= 1 ? "open" : "close"}
            onClick={() => {
              setPage(Number(page) - 1);
            }}
          >
            前へ
          </button>
        </div>
        <div className="pagination-item">
          <p id="pageNum">{page}</p>
        </div>
        <div className="pagination-item">
          <button
            id="nextButton"
            onClick={() => {
              setPage(Number(page) + 1);
            }}
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  );
};
