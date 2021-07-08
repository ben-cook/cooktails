import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid } from "@material-ui/core";
import { Drink } from "../../interfaces";
import DrinkCard from "./DrinkCard";
import {
  getPopularDrinks,
  searchDrinkByIngredients,
  searchDrinkByName,
} from "../../api";
import Loading from "../Loading";
import SearchBar from "./SearchBar";

const useStyles = makeStyles({
  resultsGridContainer: { flexGrow: 1 },
  resultsGridItem: {},
});

const SearchPage = () => {
  const classes = useStyles();
  const largerThan600 = useMediaQuery("(min-width:600px)");

  const queryRef = useRef("");
  const [drinks, setDrinks] = useState<Drink[] | null>(null);

  // const ingredientsRef

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
    const newText = e.target.value;
    queryRef.current = newText;

    if (newText === "") {
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
    console.log(value);

    if (value === [] || value.length === 0) {
      setPopularDrinks();
    } else {
      searchDrinkByIngredients(value)
        .then((res) => {
          const drinks = res.data.drinks;
          console.log(drinks);
          if (drinks !== "None Found") {
            setDrinks(drinks);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    if (!drinks) {
      setPopularDrinks();
    }
  }, [drinks]);

  return (
    <>
      <SearchBar
        onChangeHandler={onSearchChangeHandler}
        onFilterChangeHandler={onFilterChangeHandler}
        setPopularDrinks={setPopularDrinks}
      />

      {!drinks && <Loading />}
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
              style={{ height: largerThan600 ? "60vh" : "" }}
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
    </>
  );
};

export default SearchPage;
