import React, { useState } from "react";

// Components
import FavoriteListItem from "./FavoriteListItem";

// MUI
import List from "@material-ui/core/List";
import { useSelector, useDispatch } from "react-redux";

const FavoriteList = () => {
  const placesList = useSelector(state => state.placesList);

  return (
    <List>
      {placesList.map(place => (
        <FavoriteListItem place={place} />
      ))}
    </List>
  );
};

export default FavoriteList;
