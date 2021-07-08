import { Grid, TextField, Paper, Typography } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles({
  searchGridContainer: { flexGrow: 1, width: "100%" },
  searchbar: { marginTop: "2vh", marginBottom: "2vh", width: "100%" },
  filterToggle: { margin: "auto", "&:hover": { cursor: "pointer" } },
});

interface SearchBarProps {
  onChangeHandler: (e: object & { target: { value: string } }) => void;
}

const SearchBar = ({ onChangeHandler }: SearchBarProps) => {
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
            onClick={() => changeOpen()}
          />
        </Grid>
      </Grid>

      {open && (
        <Paper>
          <Typography variant="h6" color="initial">
            Filter by ingredient:
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default SearchBar;
