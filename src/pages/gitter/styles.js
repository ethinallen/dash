import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  particlesContainer: {
    width: "100%",
    // height: "100%",
    margin: -theme.spacing(1) * 3,
  },
  gridContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

  },
  cardContainer: {
    width: "30vw",
    padding: "10px",
  },

}));
