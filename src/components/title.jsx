import { Typography, Box } from "@material-ui/core";

export default function Title({ children }) {
  return (

      <Box bgcolor="primary.main">
      <Typography variant="h1" align="center">
        {children}
      </Typography>
      </Box>
  );
}
