import { Box, Checkbox, Grid, makeStyles } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect } from "react";
import { Fragment, useState } from 'react';
import { addToLocalStorage } from '../services/todo.services';
const useStyles = makeStyles({
  iconsContainer: {
    display: "flex",
  },
  icons: {
    margin: "auto",
  },
});

export default function TodoRow({ data }) {
  const { iconsContainer, icons } = useStyles();
  const [canUpdate, setUpdate] = useState(false);
  const onCheck = (e) => {
    const todo = data.find(message => message.id === +e.target.name)
    todo.done = !todo.done
    e.target.checked = todo.done
    setUpdate(up => up = !up)
    addToLocalStorage(data)
  }
  addToLocalStorage(data)
  useEffect(
    () => console.log("render"), [canUpdate]
  )
  return (
    <Grid container justify="center" spacing={1}>
      {data.map(({ done, message, id }, i) => (
        <Fragment key={i}>
          <Grid item xs={1}>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
              style={{ textAlign: "center" }}
              checked={done}
              name={String(id)}
              onClick={onCheck}
            />
          </Grid>
          <Grid item xs={8}>
            <Box lineHeight="42px">{message}</Box>
          </Grid>
          <Grid item className={iconsContainer} xs={1}>
            <CreateIcon className={icons} />
            <DeleteIcon className={icons} />
          </Grid>
          <Grid item xs={2}></Grid>
          <br />
        </Fragment>
      ))}
    </Grid>
  );
}
