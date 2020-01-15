import React from "react";

// Components
import FavoriteListItem from "./FavoriteListItem";

// MUI
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const FavoriteList = ({ placesList }) => {
  return (
    <List>
      <Divider />
      {placesList.map((place, index) => (
        <FavoriteListItem place={place} key={index} />
      ))}
    </List>
  );
};

export default FavoriteList;
