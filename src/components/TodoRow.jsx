import { Box, Checkbox, Grid, makeStyles, TextField } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import { useEffect } from "react";
import { Fragment, useState } from 'react';
import { addToLocalStorage, getOneTodo } from '../services/todo.services';
import { memo } from "react";
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
  const [canEditTodo, setEdit] = useState(true);
  const onCheck = (e) => {
    const todo = data.find(message => message.id === +e.target.name)
    todo.done = !todo.done
    e.target.checked = todo.done
    setUpdate(up => up = !up)
    addToLocalStorage(data)
  }
  addToLocalStorage(data)
  useEffect(
    () => console.log("render"), [canUpdate, canEditTodo, data]
  )
  const onEdit = (e) => {
    setEdit(!canEditTodo)
    const todo = getOneTodo(data, +e.target.id)
    console.log(todo, "\nidentifiant : ", e.target.id)
    console.log(e.target)
  }
  const editTodo = (e) => {
    const todo = getOneTodo(data, +e.target.name)
    todo.message = e.target.value
  }

  const notEditable = () => {
    return "";
  }

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
                readOnly: canEditTodo
              }} />
            </Box>
          </Grid>
          <Grid item className={iconsContainer} xs={1} onClick={onEdit} id={String(identifiant)}>
            {
              editable ? <CheckIcon   className={icons} /> :
                <CreateIcon className={icons} />
            }
            <DeleteIcon className={icons} />
          </Grid>
          <Grid item xs={2}></Grid>
          <br />
        </Fragment>
      ))}
    </Grid>
  );
}