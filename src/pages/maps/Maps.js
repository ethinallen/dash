import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

// marker data for pins
import markerData from "./data.json";


// styles
import useStyles from "./styles";

const markers = markerData.map(marker => {
  return <Marker
    position={marker.map}
  />
})


const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: parseFloat(47.650661583594946),
        lng: parseFloat(-122.34996448988886)
      }}
    >
      {markers}
    </GoogleMap>
  )),
);

export default function Maps() {
  var classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <BasicMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDM89Z40cGg2DigLdpsDcCUFF609Ux0avs"
        loadingElement={<div style={{ height: "inherit", width: "inherit" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
