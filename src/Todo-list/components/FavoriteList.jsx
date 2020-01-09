import React, { useState } from "react";

// Components
import FavoriteListItem from "./FavoriteListItem";

// MUI
import List from "@material-ui/core/List";

const FavoriteList = () => {
  return (
    <List>
      <FavoriteListItem />
      <FavoriteListItem />
      <FavoriteListItem />
    </List>
  );
};

export default FavoriteList;
