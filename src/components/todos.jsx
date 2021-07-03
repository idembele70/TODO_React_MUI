import TodoRow from "./TodoRow";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 1000,
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
  },
});

export default function Todos() {
  const { root } = useStyles();
  return (
    <Box className={root}>
      <TodoRow />
    </Box>
  );
}
