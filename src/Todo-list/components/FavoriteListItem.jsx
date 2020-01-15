import React, { useContext } from "react";

//MUI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

// Icons
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";

//Google Maps
import { GoogleMapContext } from "@googlemap-react/core";

//Redux
import { togglePlace, removePlace } from "../../redux/actions/places";
import { useDispatch } from "react-redux";

const FavoriteListItem = ({ place }) => {
  const { state } = useContext(GoogleMapContext);

  const dispatch = useDispatch();

  const deletePlace = id => dispatch(removePlace(id));
  const toggle = id => dispatch(togglePlace(id));

  return (
    <>
      <ListItem
        onClick={() => {
          state.map && state.map.setCenter(place.position);
          toggle(place.id);
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={place.name}
          secondary={place.address}
          style={{
            cursor: "pointer"
          }}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            size="small"
            onClick={e => {
              e.preventDefault();
              deletePlace(place.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

export default FavoriteListItem;
