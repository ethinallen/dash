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

  return (
    <>
      <PageTitle title="Home" />
        <Grid container spacing={1}>
            <Window windowData={{
              "size"    : 12,
              "header"  : "hello! my name is drew",
              "body" : [
                      "i love meeting people, especially you!",
                      "to be honest, i have no idea why you are here.. but i would appreciate getting to know what brought you here",
                      "for work i am a solutions engineer @Auth0 (now @Okta)",
                      "if you feel so inclined, please reach out to me at: drew@emery.guru",
                      ]
            }} >
              <img className="photo" style={{"height" : "60vh", "display" : "flex", "align-itmes" : "right", "border-radius" : "4px"}} src="https://cdn.andrewemery.io/IMG_5273.jpg"></img>
          </Window>
        </Grid>
    </>
  );
}
