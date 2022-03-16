import './App.css';
import Board from "./components/Board";
import Menu from "./components/Menu";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <div className="App">
      <StatusBar/>
      <Menu/>
      <Board/>
    </div>
  );
}

export default App;
