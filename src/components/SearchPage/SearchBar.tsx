import { useState } from "react";
import { useHistory } from "react-router-dom";
import { sortedIngredients as ingredients } from "../ingredients";
import {
  Grid,
  TextField,
  Paper,
  Container,
  Typography,
  Box,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { capitalizeEveryWord } from "../../util";
import RandomDrinkButton from "../RandomDrinkButton";

const useStyles = makeStyles({
  searchGridContainer: { flexGrow: 1, width: "100%" },
  searchbar: { marginTop: "2vh", marginBottom: "2vh", width: "100%" },
  filterToggle: { margin: "auto", "&:hover": { cursor: "pointer" } },
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
  // setPopularDrinks: () => void;
}

const SearchBar = ({
  onChangeHandler,
  onFilterChangeHandler,
}: // setPopularDrinks,
SearchBarProps) => {
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
            className={classes.filterToggle}
            onClick={changeOpen}
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
                buttonText="Random Cocktail"
              />
            </Box>
          </Container>
        </Paper>
      )}
    </>
  );
};

export default SearchBar;
