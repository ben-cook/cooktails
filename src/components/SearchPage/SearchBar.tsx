import { Grid, TextField } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchGridContainer: { flexGrow: 1, width: "100%" },
  searchbar: { marginTop: "2vh", marginBottom: "2vh", width: "100%" },
  filterToggle: { margin: "auto", "&:hover": { cursor: "pointer" } },
  resultsGridContainer: { flexGrow: 1 },
  resultsGridItem: {},
});

const SearchBar = ({
  onChangeHandler,
}: {
  onChangeHandler: (e: object & { target: { value: string } }) => void;
}) => {
  const classes = useStyles();

  return (
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
          onClick={() => console.log("click")}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
