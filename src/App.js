import "./App.css";

//コンポーネントimport
import { ThreadList } from "./pages/threadList";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="title">
          <ul>
            <li>
              <h1>掲示板</h1>
            </li>
            <li>
              <button id="postThread">スレッドをたてる</button>
            </li>
          </ul>
        </nav>
      </header>
      <ThreadList />
    </div>
  );
}

export default App;
