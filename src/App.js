import logo from "./logo.svg";
import "./App.css";

//コンポーネントimport
import { ThreadList } from "./pages/threadList";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>掲示板</h1>
          <button>スレッドをたてる</button>
        </div>
      </header>
      <h1>Hello World!</h1>
      <ThreadList />
    </div>
  );
}

export default App;
