import React from "react";

import { GoogleMapProvider, MapBox } from "@googlemap-react/core";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env);
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
        onCenterChanged={() => {
          console.log("The center of the map has changed.");
        }}
      />
    </GoogleMapProvider>
  );
};

export default Map;
