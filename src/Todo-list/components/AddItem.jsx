import React, { useState } from "react";

import uuid from "uuid";

// Redux
import { useDispatch } from "react-redux";
import { addPlaceAction } from "../../redux/actions/places";
// MUI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

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

const AddItem = () => {
  const [place, setPlace] = useState(value);
  const dispatch = useDispatch();

  const addPlace = place => dispatch(addPlaceAction(place));
  const classes = useStyles();

  const handleChange = e => {
    const name = e.target.name;
    setPlace({ ...place, [name]: e.target.value });
  };

  const handleClick = event => {
    event.preventDefault();
    console.log(place);
    addPlace({
      id: uuid(),
      name: place.name,
      address: place.address
    });
    setPlace(value);
  };
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add a new favorite location
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="todo-input-name"
          label="name"
          name="name"
          onChange={handleChange}
          value={place.name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="address"
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
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddItem;
