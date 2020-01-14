import React, { useState } from "react";

// Components
import AddItem from "./AddItem";
import FavoriteList from "./FavoriteList";
import Map from "./Map";

// MUI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Main = () => {
  const [view, setView] = useState(false);
  const classes = useStyles();

  const toggleView = () => {
    setView(prevView => !prevView);
  };

  return (
    <div className={classes.root}>
      <Grid container style={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Container}
          style={{ position: "relative", marginTop: "2rem" }}
        >
          <Paper className={classes.paper}>
            {view ? <AddItem /> : <FavoriteList />}
          </Paper>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              marginBottom: "2rem"
            }}
          >
            <Button
              fullWidth
              variant="contained"
              color="green"
              onClick={toggleView}
            >
              {view ? "Favorite List" : "Add a Favorite"}
            </Button>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
