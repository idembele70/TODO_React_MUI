import { Box, colors, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  title: {
    color: colors.common.white,
  },
}));

export default function Title({ children }) {
  const classes = useStyle();
  return (
    <Box bgcolor="primary.main" p={2}>
      <Typography variant="h5" align="center" className={classes.title}>
        {children}
      </Typography>
    </Box>
  );
}
