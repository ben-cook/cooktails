import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Typography } from "@material-ui/core";
import { Drink } from "../../interfaces";
import DrinkCard from "./DrinkCard";
import {
  getPopularDrinks,
  searchDrinkByIngredients,
  searchDrinkByName,
} from "../../api";
import Loading from "../Loading";
import SearchBar from "./SearchBar";
import { replaceSpaceWithUnderscore } from "../../util";

const useStyles = makeStyles({
  resultsGridContainer: { flexGrow: 1 },
  resultsGridItem: {},
});

const formatErrorMessage = (ingredients: string[]): string => {
  // const recursiveFormat = (ingredients: string[]): string => {
  //   let string;
  //   if (ingredients.length === 2) {
  //     string = `${ingredients[0]} and ${ingredients[1]}`;
  //   } else {
  //     string = `${ingredients[0]}, ${recursiveFormat(ingredients.slice(1))}`;
  //   }

  //   return string;
  // };

  // let ingredientString;

  // if (ingredients.length === 1) {
  //   ingredientString = ingredients[0];
  // } else {
  //   ingredientString = recursiveFormat(ingredients);
  // }

  // return `Can't find any drinks with ${ingredientString}.`;
  return "can't find those drinks";
};

const SearchPage = () => {
  const classes = useStyles();
  const largerThan600 = useMediaQuery("(min-width:600px)");

  const queryRef = useRef<string>("");
  const [drinks, setDrinks] = useState<Drink[] | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const ingredientsRef = useRef<string[]>([]);

  const setPopularDrinks = () => {
    getPopularDrinks()
      .then((res) => {
        let drinks = res.data.drinks;
        setDrinks(drinks);
        console.log(drinks);
      })
      .catch((err) => console.error(err));
  };

  const onSearchChangeHandler = (e: object & { target: { value: string } }) => {
    console.log("search change");
    const newText = e.target.value;
    queryRef.current = newText;

    if (newText === "") {
      console.log("getting popular 1");
      setPopularDrinks();
    } else {
      searchDrinkByName(newText)
        .then((res) => {
          if (queryRef.current === newText) {
            const drinks = res.data.drinks;
            if (drinks) {
              setDrinks(drinks);
            }
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const onFilterChangeHandler = (e: object, value: string[]) => {
    console.log("filter change");
    const ingredients = value;
    ingredientsRef.current = ingredients;

    if (ingredients === [] || ingredients.length === 0) {
      console.log("getting popular 2");
      setPopularDrinks();
    } else {
      setErrorMessage(null);
      searchDrinkByIngredients(ingredients)
        .then((res) => {
          const drinks = res.data.drinks;
          console.log(drinks);
          if (ingredientsRef.current === ingredients) {
            if (drinks !== "None Found") {
              setDrinks(drinks);
            } else {
              setDrinks(null);
              setErrorMessage(formatErrorMessage(drinks));
            }
          }
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    setPopularDrinks();
  }, []);

  return (
    <>
      <SearchBar
        onChangeHandler={onSearchChangeHandler}
        onFilterChangeHandler={onFilterChangeHandler}
        setPopularDrinks={setPopularDrinks}
      />

      {!drinks && !errorMessage && <Loading />}
      {drinks && (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          className={classes.resultsGridContainer}
        >
          {drinks.map((drink: Drink) => (
            <Grid
              item
              key={drink.idDrink}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.resultsGridItem}
              style={{
                height: largerThan600 && drink.strIngredient1 ? "60vh" : "",
              }}
            >
              <Link
                to={`/drink/${drink.idDrink}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <DrinkCard drink={drink} />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
      {errorMessage && <Typography variant="h4">{errorMessage}</Typography>}
    </>
  );
};

export default SearchPage;
