import React, { useState } from "react";

// Components
import AddItem from "./AddItem";
import FavoriteList from "./FavoriteList";
import Map from "./Map";

// MUI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const Main = () => {
  const [view, setView] = useState(false);

  const toggleView = () => {
    setView(prevView => !prevView);
  };
  return (
    <Grid container component="main" style={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {view ? <AddItem /> : <FavoriteList />}
        <div>
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
  );
};

export default Main;
