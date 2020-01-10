import React, { useContext } from "react";

// Google Maps
import { CustomControl, GoogleMapContext } from "@googlemap-react/core";

//MUI
import IconButton from "@material-ui/core/IconButton";
import CenterIcon from "@material-ui/icons/GpsFixed";

const MapCenterButton = () => {
  const { state } = useContext(GoogleMapContext);
  return (
    <CustomControl bindingPosition="BOTTOM_LEFT">
      <IconButton
        style={{ backgroundColor: "lightGrey", marginBottom: "1rem" }}
      >
        <CenterIcon
          onClick={() => {
            state.map &&
              state.map.setCenter({
                lat: 40.7128,
                lng: -74.006
              });
          }}
        />
      </IconButton>
    </CustomControl>
  );
};

MapCenterButton.displayName = "MapCenterButton";

export default MapCenterButton;
