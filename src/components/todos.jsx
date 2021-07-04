import TodoRow from "./TodoRow";
import { makeStyles, Box } from "@material-ui/core";
import AddTodo from "./AddTodo";
import { useEffect, useState } from 'react';
import { getLocalStorage } from "../services/todo.services";
const useStyles = makeStyles({
  root: {
    width: 1000,
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
  },
});
const todosContainer = getLocalStorage() || [];

export default function Todos() {
  const { root } = useStyles();
  const [update, setUpdate] = useState(false);
  const handleNewTodo = (todo) => {
    todosContainer.push({ ...todo, id: todosContainer.length });
    setUpdate(!update)
  };
  useEffect(() => console.log(todosContainer), [update])

  return (
    <>
      <AddTodo onAddNewTodo={handleNewTodo} />
      <Box className={root}>
        <TodoRow data={todosContainer} />
      </Box>
    </>
  );
}
