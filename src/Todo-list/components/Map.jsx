import React from "react";

// Google maps
import { GoogleMapProvider, MapBox } from "@googlemap-react/core";

//MUI

// Components
import MapCenterButton from "./MapCenterButton";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_API_KEY;

const Map = () => {
  return (
    <GoogleMapProvider>
      <MapBox
        apiKey={GOOGLE_MAPS_API_KEY}
        opts={{
          center: { lat: 39, lng: 116 },
          zoom: 14
        }}
        style={{
          height: "100vh",
          width: "100%"
        }}
        useDrawing
        useGeometry
        usePlaces
        useVisualization
      />
      <MapCenterButton />
    </GoogleMapProvider>
  );
};

export default Map;
