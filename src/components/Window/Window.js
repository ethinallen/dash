import {
  Paper,
  IconButton,
  Menu,
  Grid,
  MenuItem,
  Typography,
} from "@material-ui/core";

// styles
import useStyles from "./styles";
import classnames from "classnames";

export default function Window({
  children,
  style,
  ...props
}) {
  var classes = useStyles();

  return (
    <div className={classes.windowWrapper} style={style && {...style}}>
      <Paper className={classes.paper} classes={{ root: classnames(classes.windowRoot)}}>
      <Typography variant="h1" color="textPrimary">
        <div className={classes.windowHeader}>{props.windowData.header}</div>
      </Typography>
      <Grid container>
        <Grid spacing={3}>
        {props.windowData.body.map((bodyText, index) =>
          <Typography variant="h2" color="textPrimary">
            <div className={classes.windowBody}>{bodyText}</div>
          </Typography>
        )}
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}
