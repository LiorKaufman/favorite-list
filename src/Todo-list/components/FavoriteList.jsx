import React, { useState } from "react";

// Components
import FavoriteListItem from "./FavoriteListItem";

// MUI
import List from "@material-ui/core/List";
import { useSelector, useDispatch } from "react-redux";
import Divider from "@material-ui/core/Divider";

const FavoriteList = () => {
  const placesList = useSelector(state => state.placesList);

  return (
    <List>
      <Divider />
      {placesList.map(place => (
        <div>
          <FavoriteListItem place={place} key={place.id} />
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default FavoriteList;
