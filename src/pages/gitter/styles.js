import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  particlesContainer: {
    height: "100%",
    margin: -theme.spacing(1) * 3,
  },
  gridContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  }
}));
