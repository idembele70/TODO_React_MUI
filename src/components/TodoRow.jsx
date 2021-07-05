import { Box, Checkbox, Grid, makeStyles, TextField } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import { Fragment, useState, useEffect } from 'react';
import { addToLocalStorage, getOneTodo } from '../services/todo.services';
import { useCallback } from "react";
const useStyles = makeStyles({
  iconsContainer: {
    display: "flex",
  },
  icons: {
    margin: "auto",
    cursor: "pointer"
  },
});
export default function TodoRow({ data }) {
  const { iconsContainer, icons } = useStyles();
  const [canUpdate, setUpdate] = useState(false);
  const [canDelete, setDelete] = useState(false);
  const onCheck = (e) => {
    const todo = data.find(message => message.id === +e.target.name)
    todo.done = !todo.done
    e.target.checked = todo.done
    setUpdate(up => up = !up)
    addToLocalStorage(data)
  }
  addToLocalStorage(data)
  useEffect(
    () => console.log("render", data), [canUpdate, canDelete, data]
  )
  const onEdit = useCallback((e) => {
    let id = null
    if (e.target.id) id = e.target.id
    else id = e.target.parentElement.id
    const todo = getOneTodo(data, +id)
    console.log(todo);
    if (todo) todo.editable = !todo.editable;
    setUpdate(!canUpdate)
  }, [canUpdate])
  const editTodo = useCallback((e) => {
    const todo = getOneTodo(data, +e.target.name);
    todo.message = e.target.value
    setUpdate(!canUpdate)
  }, [canUpdate])

  const notEditable = useCallback((e) => {
    data.forEach(todo => {
      if (todo.editable) todo.editable = false
    });
    addToLocalStorage(data)
    setUpdate(!canUpdate)
  }, [canUpdate])
  const onDelete = useCallback((e) => {
    let id = null
    const { id: todoId, parentElement } = e.target
    if (todoId) id = todoId;
    else id = parentElement.id;
    const todo = getOneTodo(data, +id)
    data.splice(todo, 1)
    addToLocalStorage(data)
    setDelete(!canDelete)
  }, [canDelete])

  return (
    <Grid container justify="center" spacing={1}>
      {data.map(({ done, message, id: identifiant, editable }, i) => (
        <Fragment key={i}>
          <Grid item xs={1}>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
              style={{ textAlign: "center" }}
              checked={done}
              name={String(identifiant)}
              onClick={onCheck}
            />
          </Grid>
          <Grid item xs={8}>
            <Box lineHeight="42px" style={{ textDecoration: done ? "line-through" : "none" }} >
              <TextField name={String(identifiant)} id="filled-read-only-input" label="Task" value={message} onChange={editTodo} onBlur={notEditable} inputProps={{
                readOnly: !editable
              }} />
            </Box>
          </Grid>
          <Grid item className={iconsContainer} xs={1} onClick={onEdit} id={String(identifiant)}>
            {
              editable ? <CheckIcon className={icons} /> :
                <CreateIcon className={icons} />
            }
            <DeleteIcon id={String(identifiant)} onClick={onDelete} className={icons} />
          </Grid>
          <Grid item xs={2}></Grid>
          <br />
        </Fragment>
      ))}
    </Grid>
  );
}