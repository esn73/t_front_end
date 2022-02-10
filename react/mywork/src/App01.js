import logo from './logo.svg';
import './App.css';

let title="JSX -> DOM 문법"
function App() {
  return (
    <div className="App">
      <img src={logo}></img>
      <h1 style={{ color: "red" , fontSize: "102px"}}>{title}</h1>
      <p style={styleA}>{arry[0]}</p>
    </div>
  );
}

export default App;
