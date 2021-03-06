import { useQuery } from "@apollo/client";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { ReactElement } from "react";
import { Link, useHistory } from "react-router-dom";

import { RANDOM_DRINK, RandomDrinkData } from "../../apollo/RandomDrink";
import DrinkPage from "../DrinkPage/DrinkPage";
import Loading from "../Loading";
import RandomDrinkButton from "../RandomDrinkButton";

const useStyles = makeStyles({
  randomDrinkButton: {
    marginTop: "2vh",
    marginBottom: "0.6vh",
    textTransform: "capitalize",
    margin: "auto",
  },
  buttonContainer: { flexGrow: 1, width: "100%", marginTop: "2vh" },
  backButton: {
    margin: "auto",
    marginTop: "1vh",
    "&:hover": { cursor: "pointer" },
  },
});

const RandomPage = (): ReactElement => {
  const classes = useStyles();
  const history = useHistory();

  const { loading, data, refetch } = useQuery<RandomDrinkData, {}>(
    RANDOM_DRINK
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        className={classes.buttonContainer}
      >
        <Grid item container xs={2} sm={1}>
          <NavigateBeforeIcon
            className={classes.backButton}
            onClick={() => history.push("/")}
          />
        </Grid>
        <Grid item container xs={10} sm={8} md={6} lg={4}>
          <RandomDrinkButton
            randomDrinkHandler={refetch}
            className={classes.randomDrinkButton}
            buttonText="See another random cocktail!"
            fullWidth={true}
          />
        </Grid>
      </Grid>

      {data?.randomDrink.name && (
        <Link
          to={`/drink/${data.randomDrink.name}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <DrinkPage name={data?.randomDrink.name} />
        </Link>
      )}

      <Box textAlign="center"></Box>
    </>
  );
};

export default RandomPage;
