import { Grid, Checkbox, Box, makeStyles } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  iconsContainer: {
    display: "flex",
  },
  icons: {
    margin: "auto",
  },
});

export default function TodoRow() {
  const { iconsContainer, icons } = useStyles();
  return (
    <>
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          ></Checkbox>
        </Grid>
        <Grid item xs={8}>
          <Box lineHeight="42px">Text for testing UI render</Box>
        </Grid>
        <Grid item className={iconsContainer}>
          <CreateIcon className={icons} />
        </Grid>
        <Grid item className={iconsContainer}>
          <DeleteIcon className={icons} />
        </Grid>
      </Grid>
    </>
  );
}
