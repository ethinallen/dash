import React, { useState } from "react";
import {
  Grid,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";

import { useTheme } from "@material-ui/styles";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <>
      <PageTitle title="Home" />
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <Widget
          title="Nice to meet you!"
          upperTitle
          noBodyPadding
          bodyClass={classes.testing}
        >
          <div>testing</div>
        </Widget>        </Grid>
      </Grid>
    </>
  );
}
