import React from "react";

// Google maps
import { useCurrentPosition } from "react-use-geolocation";
import { MapBox } from "@googlemap-react/core";

import Spinner from "@material-ui/core/CircularProgress";

//MUI

// Components
import MapCenterButton from "./MapCenterButton";
import MapMarker from "./MapMarker";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_API_KEY;

const Map = ({ placesList }) => {
  const [position, error] = useCurrentPosition();

  const newCenter = () => {
    if (!position && !error) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
    if (error) {
      return <div>{error.message}</div>;
    } else {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      return (
        <div>
          <MapBox
            apiKey={GOOGLE_MAPS_API_KEY}
            opts={{
              center: userLocation,
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
          {placesList.map(marker => (
            <MapMarker marker={marker} key={marker.id} />
          ))}
          <MapCenterButton center={userLocation} />
        </div>
      );
    }
  };

  return <div>{newCenter()}</div>;
};

export default Map;
