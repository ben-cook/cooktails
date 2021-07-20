import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FilterListIcon from "@material-ui/icons/FilterList";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { capitalizeEveryWord } from "../../util";
import { ingredients } from "../ingredients";
import RandomDrinkButton from "../RandomDrinkButton";

const useStyles = makeStyles({
  searchGridContainer: { flexGrow: 1, width: "100%" },
  searchbar: { marginTop: "2vh", marginBottom: "2vh", width: "100%" },
  clickableIcons: { margin: "auto", "&:hover": { cursor: "pointer" } },
  ingredientsAutocomplete: { paddingTop: "2vh" },
  randomDrinkButton: {
    marginBottom: "2vh",
    textTransform: "capitalize",
    margin: "auto",
  },
  optionsPaper: {
    marginBottom: "2vh",
    justifyContent: "center",
  },
});

interface SearchBarProps {
  onChangeHandler: (e: object & { target: { value: string } }) => void;
  onFilterChangeHandler: (e: object, value: string[]) => void;
  largerThan600: boolean;
}

const SearchBar = ({
  onChangeHandler,
  onFilterChangeHandler,
  largerThan600,
}: SearchBarProps) => {
  const classes = useStyles();
  const history = useHistory();

  const redirectTo = (url: string): void => {
    history.push(url);
  };

  const [open, setOpen] = useState<boolean>(false);

  const changeOpen = () => {
    setOpen(!open);
  };

  const randomDrinkHandler = () => {
    redirectTo("/random");
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        className={classes.searchGridContainer}
      >
        <Grid item xs zeroMinWidth>
          <TextField
            className={classes.searchbar}
            label="Search for a drink"
            variant="outlined"
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item container xs={2} sm={1}>
          <FilterListIcon
            className={classes.clickableIcons}
            onClick={changeOpen}
          />
        </Grid>
        <Grid item container xs={2} sm={1}>
          <NavigateNextIcon
            className={classes.clickableIcons}
            onClick={() => history.push("/next")}
          />
        </Grid>
      </Grid>

      {open && (
        <Paper className={classes.optionsPaper}>
          <Container>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={ingredients}
              getOptionLabel={(option) => capitalizeEveryWord(option)}
              filterSelectedOptions
              className={classes.ingredientsAutocomplete}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Filter by ingredients instead!"
                  placeholder="+"
                />
              )}
              onChange={onFilterChangeHandler}
            />
            <Typography variant="h6" align="center">
              or...
            </Typography>

            <Box textAlign="center">
              <RandomDrinkButton
                randomDrinkHandler={randomDrinkHandler}
                className={classes.randomDrinkButton}
                buttonText="Show me a Random Cocktail"
                fullWidth={!largerThan600}
              />
            </Box>
          </Container>
        </Paper>
      )}
    </>
  );
};

export default SearchBar;
