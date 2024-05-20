import { useNavigate } from "react-router-dom";

export const Header = () => {
  const nav = useNavigate();

  return (
    <header>
      <nav className="title">
        <ul>
          <li>
            <button
              id="home"
              onClick={() => {
                nav("/");
              }}
            >
              <h1>掲示板</h1>
            </button>
          </li>
          <li>
            <button
              id="postThread"
              onClick={() => {
                nav("/threads/new");
              }}
            >
              スレッドをたてる
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
