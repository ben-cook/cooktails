import { useState } from "react";
import { sortedIngredients as ingredients } from "./ingredients";
import { Grid, TextField, Paper, Container } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { capitalizeEveryWord } from "../../util";

const useStyles = makeStyles({
  searchGridContainer: { flexGrow: 1, width: "100%" },
  searchbar: { marginTop: "2vh", marginBottom: "2vh", width: "100%" },
  filterToggle: { margin: "auto", "&:hover": { cursor: "pointer" } },
  ingredientsAutocomplete: {},
  optionsPaper: { marginBottom: "2vh" },
});

interface SearchBarProps {
  onChangeHandler: (e: object & { target: { value: string } }) => void;
  onFilterChangeHandler: (e: object, value: string[]) => void;
  setPopularDrinks: () => void;
}

const SearchBar = ({
  onChangeHandler,
  onFilterChangeHandler,
  setPopularDrinks,
}: SearchBarProps) => {
  const classes = useStyles();

  const [open, setOpen] = useState<boolean>(false);

  const changeOpen = () => {
    setOpen(!open);
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
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={2}
            >
              <Grid item zeroMinWidth xs={12}>
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
              </Grid>
            </Grid>
          </Container>
        </Paper>
      )}
    </>
  );
};

export default SearchBar;
