import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import { useCallback } from "react";
import { useRef } from "react";
import TodoModel from "./../models/Todo.model";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "14px",
    },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  newTodoRow: {
    width: "560px",
  },
  newTodoContainer: {
    width: "600px",
    margin: theme.spacing(2, "auto"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addTodoBtn: {
    width: "20px",
  },
}));

export default function AddTodo(props) {
  const { root, newTodoRow, newTodoContainer, addTodoBtn } = useStyles();
  const newTodoRef = useRef("");
  const { onAddNewTodo } = props;
  const onAddTodo = useCallback(() => {
    const { value } = newTodoRef.current;
    onAddNewTodo(TodoModel({ message: value, done: false }));
  }, [onAddNewTodo]);
  return (
    <Box className={newTodoContainer} boxShadow={2}>
      <form className={root}>
        <TextField
          id="outlined-basic"
          label="Add new todo"
          variant="outlined"
          className={newTodoRow}
          inputRef={newTodoRef}
        />
        <Button
          variant="contained"
          color="primary"
          className={addTodoBtn}
          onClick={onAddTodo}
        >
          ADD
        </Button>
      </form>
    </Box>
  );
}
