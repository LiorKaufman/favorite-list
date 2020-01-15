import React, { useContext } from "react";

// Google Maps
import { CustomControl, GoogleMapContext } from "@googlemap-react/core";

//MUI
import IconButton from "@material-ui/core/IconButton";
import CenterIcon from "@material-ui/icons/GpsFixed";

const MapCenterButton = ({ center }) => {
  const { state } = useContext(GoogleMapContext);
  return (
    <CustomControl bindingPosition="BOTTOM_LEFT">
      <IconButton
        style={{ backgroundColor: "lightGrey", marginBottom: "1rem" }}
        onClick={() => {
          state.map && state.map.setCenter(center);
        }}
      >
        <CenterIcon />
      </IconButton>
    </CustomControl>
  );
};

MapCenterButton.displayName = "MapCenterButton";

export default MapCenterButton;
