import { useState, useEffect } from "react";
import { getRandomDrink } from "../../api";
import DrinkPage from "../DrinkPage/DrinkPage";
import { ReactElement } from "react";
import Loading from "../Loading";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import RandomDrinkButton from "../RandomDrinkButton";
import { useQuery } from "@apollo/client";
import { RandomDrinkData, RANDOM_DRINK } from "../../apollo/RandomDrink";

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

      {/* <Box textAlign="center">
        <Button
          variant="outlined"
          color="default"
          className={classes.randomDrinkButton}
          // fullWidth
        >
          <Typography variant="body1" onClick={randomDrinkHandler}>
            See another random cocktail!
          </Typography>
        </Button>
      </Box> */}
    </>
  );
};

export default RandomPage;
