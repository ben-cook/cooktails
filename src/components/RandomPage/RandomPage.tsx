import { useState, useEffect } from "react";
import { getRandomDrink } from "../../api";
import DrinkPage from "../DrinkPage/DrinkPage";
import { Drink } from "../../interfaces";
import { ReactElement } from "react";
import Loading from "../Loading";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
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

  const [drinkInfo, setDrinkInfo] = useState<Drink | null>(null);

  const randomDrinkHandler = () => {
    getRandomDrink()
      .then((res) => {
        const drink = res.data.drinks[0];
        setDrinkInfo(drink);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRandomDrink()
      .then((res) => {
        const drink = res.data.drinks[0];
        setDrinkInfo(drink);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!drinkInfo) {
    return <Loading />;
  }

  return (
    <>
      {/* <DrinkPage drinkObject={drinkInfo as Drink} /> */}
      <Box textAlign="center">
        <RandomDrinkButton
          randomDrinkHandler={randomDrinkHandler}
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
