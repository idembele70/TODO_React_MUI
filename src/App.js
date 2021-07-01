import "./App.css";

function TodoInput({}) {
  const onAddTodo = () => {
    
  }
  return (
    <>
      <input type="text" name="todo-input" id="todo-input" autoComplete="off" />
      <button type="submit" onClick={onAddTodo} >ADD</button>
    </>
  );
}

function Todos(todo) {
  const { message } = todo;
}

function App() {
  return (
    <>
      <TodoInput />
    </>
  );
}

export default App;
