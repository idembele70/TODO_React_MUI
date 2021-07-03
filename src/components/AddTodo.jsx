import { Box, Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 
  root: {
    "& > *" : {
      margin : "14px",
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

export default function AddTodo() {
  const { root, newTodoRow, newTodoContainer, addTodoBtn } = useStyles();
  return (
    <Box className={newTodoContainer} boxShadow={2}>
      <form className={root}>
        <TextField
          id="outlined-basic"
          label="Add title"
          variant="outlined"
          className={newTodoRow}
        />
        <Button variant="contained" color="primary" className={addTodoBtn}>
          ADD
        </Button>
      </form>
    </Box>
  );
}
