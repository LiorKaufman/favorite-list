import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

const autocompleteService = { current: null };

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2)
  }
}));

export default function PlacesAutoComplete({ onChange, value }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const fetch = React.useMemo(
    () =>
      throttle((input, callback) => {
        autocompleteService.current.getPlacePredictions(input, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions([]);
      return undefined;
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        setOptions(results || []);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, fetch]);

  return (
    <div>
      <Autocomplete
        getOptionLabel={option =>
          typeof option === "string" ? option : option.description
        }
        filterOptions={x => x}
        options={options}
        autoComplete
        includeInputInList
        freeSolo
        disableOpenOnFocus
        autoSelect
        value={value}
        renderInput={params => (
          <TextField
            {...params}
            label="Search for a location address"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        )}
        onChange={(event, value) => {
          if (value) {
            const address = value.description;
            onChange(address);
          }
        }}
        renderOption={option => {
          const matches =
            option.structured_formatting.main_text_matched_substrings;
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map(match => [match.offset, match.offset + match.length])
          );

          return (
            <Grid container alignItems="center">
              <Grid item>
                <LocationOnIcon className={classes.icon} />
              </Grid>
              <Grid item xs>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{ fontWeight: part.highlight ? 700 : 400 }}
                  >
                    {part.text}
                  </span>
                ))}

                <Typography variant="body2" color="textSecondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          );
        }}
      />
    </div>
  );
}
