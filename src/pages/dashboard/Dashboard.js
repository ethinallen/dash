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
import data from "./data";
import Widget from "../../components/Widget";
import Window from "../../components/Window";
import PageTitle from "../../components/PageTitle";
import Dot from "../../components/Sidebar/components/Dot";
import BigStat from "./components/BigStat/BigStat";

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();
  console.log(data);
  return (
    <>
      <PageTitle title="Home" />
        <Grid container spacing={1}>
          <Grid item xs={6} align="center" justify="center" alignItems="center"  >
            <img className="photo" style={{"height" : "60vh", "display" : "flex", "align-itmes" : "right", "border-radius" : "4px"}} src="https://cdn.andrewemery.io/IMG_5273.jpg"></img>
          </Grid>
          {data.windows.map((windowData, index) =>
            <Grid item xs={windowData.size}>
              <Window
              windowData={windowData}
              />
            </Grid>
          )}
        </Grid>
    </>
  );
}
