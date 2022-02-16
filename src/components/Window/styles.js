import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  windowWrapper: {
    display: "flex",
    minHeight: "100%",
  },
  windowHeader: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  windowBody: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  windowRoot: {
    boxShadow: theme.customShadows.window,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "auto",
  },
}));
