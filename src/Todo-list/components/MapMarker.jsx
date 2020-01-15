import React from "react";

// Google maps
import { Marker, InfoWindow } from "@googlemap-react/core";

//Redux
import { useDispatch } from "react-redux";
import { togglePlace } from "../../redux/actions/places";

const MapMarker = ({ marker }) => {
  const dispatch = useDispatch();

  const toggle = id => dispatch(togglePlace(id));

  const toggleIsVisible = () => {
    toggle(marker.id);
  };

  return (
    <>
      <Marker
        onClick={toggleIsVisible}
        id={marker.id}
        opts={{
          position: marker.position
        }}
      />
      <InfoWindow
        anchorId={marker.id}
        onClick={toggleIsVisible}
        opts={{
          position: marker.position,
          content: `${marker.name}`
        }}
        visible={marker.show}
        onCloseClick={() => {
          toggle(marker.id);
        }}
      />
    </>
  );
};

export default MapMarker;
