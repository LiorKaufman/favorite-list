import React, { useState } from "react";
//MUI
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

// Icons
import ImageIcon from "@material-ui/icons/Image";

const FavoriteListItem = ({ place }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={place.name} secondary={place.address} />
    </ListItem>
  );
};

export default FavoriteListItem;
