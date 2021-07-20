import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  homeButton: {
    margin: "auto",
    marginTop: "1vh",
    "&:hover": { cursor: "pointer" },
  },
  gridContainer: { flexGrow: 1, width: "100%", marginTop: "2vh" },
});

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      className={classes.gridContainer}
    >
      <Grid item container xs={2} sm={1}>
        <HomeIcon
          className={classes.homeButton}
          onClick={() => history.push("/")}
        />
      </Grid>
    </Grid>
  );
};

export default Nav;
