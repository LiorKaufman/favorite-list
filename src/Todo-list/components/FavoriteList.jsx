import React from "react";

// Components
import FavoriteListItem from "./FavoriteListItem";
import uuid from "uuid";

// MUI
import List from "@material-ui/core/List";
import { useSelector } from "react-redux";
import Divider from "@material-ui/core/Divider";

const FavoriteList = () => {
  const placesList = useSelector(state => state.placesList);

  return (
    <List>
      <Divider />
      {placesList.map(place => (
        <div key={uuid()}>
          <FavoriteListItem place={place} />
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default FavoriteList;
