import { useQuery } from "@apollo/client";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactElement } from "react";

import { RANDOM_DRINK, RandomDrinkData } from "../../apollo/RandomDrink";
import DrinkPage from "../DrinkPage/DrinkPage";
import Loading from "../Loading";
import RandomDrinkButton from "../RandomDrinkButton";

const useStyles = makeStyles({
  randomDrinkButton: {
    marginTop: "2vh",
    marginBottom: "2vh",
    textTransform: "capitalize",
    margin: "auto",
  },
});

const RandomPage = (): ReactElement => {
  const classes = useStyles();

  const { loading, data, refetch } = useQuery<RandomDrinkData, {}>(
    RANDOM_DRINK
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {data?.randomDrink.name && <DrinkPage name={data?.randomDrink.name} />}

      <Box textAlign="center">
        <RandomDrinkButton
          randomDrinkHandler={refetch}
          className={classes.randomDrinkButton}
          buttonText="See another random cocktail!"
        />
      </Box>
    </>
  );
};

export default RandomPage;
