import logo from './logo.svg';
import './App.css';
import reactDom from 'react'

let title="JSX -> DOM 문법"
function App() {
  const [textInput, setTextInput]=useState("");
  const [todoList, setTodoList]=useState(["투두리스트 만들기"])

  const addText=()=>{}
  const delBtn=()=>{}




  return (
    <div className="list">
      <h1>{title}</h1>
      <div className="inputBox">
        <input className="text" value={textInput}
        onChange={(event)=>{ setTextInput(event.target.value)}}>
          <button className="addBtn" onClick={addText}>등록</button>
      </div>

  </div>
  );
}

export default App;
