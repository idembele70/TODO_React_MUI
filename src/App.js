import "./App.css";

import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Title>TODO APP</Title>
      <AddTodo />
      <Todos/>
    </>
  );
}

export default App;
