import React, { useState } from "react";

import uuid from "uuid";

// Redux
import { useDispatch } from "react-redux";
import { addPlaceAction } from "../../redux/actions/places";
// MUI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "flex-start,"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const value = {
  name: "",
  address: ""
};
const errorsValue = {
  nameError: "",
  addressError: ""
};

const AddItem = () => {
  const [place, setPlace] = useState(value);
  const [errors, setErrors] = useState(errorsValue);
  const dispatch = useDispatch();

  const addPlace = place => dispatch(addPlaceAction(place));
  const classes = useStyles();

  const handleChange = e => {
    const name = e.target.name;
    const errorName = `${name}Error`;
    setPlace({ ...place, [name]: e.target.value });
    setErrors({ ...errors, [errorName]: "" });
    console.log(place);
    console.log(errors);
  };

  const checkErrors = () => {
    for (let key in errors) {
      if (errors[key] === "Cannot be left blank") {
        return true;
      }
    }
    return false;
  };

  const handleErrors = () => {
    for (let key in place) {
      const errorName = `${key}Error`;
      if (place[key].trim() === "") {
        setErrors({ ...errors, [errorName]: "Cannot be left blank" });
        return false;
      }
    }
    return true;
  };

  const handleClick = event => {
    event.preventDefault();
    handleErrors();
    if (handleErrors()) {
      addPlace({
        id: uuid(),
        name: place.name,
        address: place.address
      });
      setPlace(value);
    }
  };
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Add a new location
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          error={Boolean(errors.nameError)}
          helperText={Boolean(errors.nameError) ? errors.nameError : ""}
          variant="outlined"
          margin="normal"
          fullWidth
          id="todo-input-name"
          label="Name"
          name="name"
          onChange={handleChange}
          value={place.name}
        />
        <TextField
          error={Boolean(errors.addressError)}
          helperText={Boolean(errors.addressError) ? errors.addressError : ""}
          variant="outlined"
          margin="normal"
          fullWidth
          label="Address"
          id="todo-input-address"
          name="address"
          onChange={handleChange}
          value={place.address}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClick}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
