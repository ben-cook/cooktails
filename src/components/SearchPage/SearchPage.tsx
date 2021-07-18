import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Typography, Container } from "@material-ui/core";
import { Drink } from "../../interfaces";
import DrinkCard from "./DrinkCard";
import {
  getPopularDrinks,
  searchDrinkByIngredients,
  searchDrinkByName,
} from "../../api";
import Loading from "../Loading";
import SearchBar from "./SearchBar";
import { capitalizeEveryWord } from "../../util";
import { useQuery, gql } from "@apollo/client";

const useStyles = makeStyles({
  resultsGridContainer: { flexGrow: 1 },
  resultsGridItem: {},
  errorMessage: { margin: "auto" },
});

const formatErrorMessage = (ingredients: string[]): string => {
  let ingredientsUpper = ingredients.map(capitalizeEveryWord);

  const recursiveFormat = (ingredients: string[]): string => {
    let string;
    if (ingredients.length === 1) {
      string = ingredients[0];
    } else if (ingredients.length === 2) {
      string = `${recursiveFormat(
        ingredients.slice(0, 1)
      )} and ${recursiveFormat(ingredients.slice(1))}`;
    } else {
      string = `${ingredients[0]}, ${recursiveFormat(ingredients.slice(1))}`;
    }

    return string;
  };

  return `Couldn't find any drinks with ${recursiveFormat(ingredientsUpper)}.`;
};

const FUZZY_DRINK_SEARCH = gql`
  query FuzzyDrinkSearch(
    $fuzzySearchDrinksByNameSearchTerm: String
    $fuzzySearchDrinksByNameLimit: Int
    $fuzzySearchDrinksByNameOffset: Int
  ) {
    fuzzySearchDrinksByName(
      searchTerm: $fuzzySearchDrinksByNameSearchTerm
      limit: $fuzzySearchDrinksByNameLimit
      offset: $fuzzySearchDrinksByNameOffset
    ) {
      name
      ingredients {
        name
      }
      strDrinkThumb
    }
  }
`;

export interface DrinkSearchIngredient {
  name: string;
}
export interface DrinkCardProps {
  name: string;
  ingredients: DrinkSearchIngredient[];
  strDrinkThumb: string;
}
interface DrinkSearchData {
  fuzzySearchDrinksByName: DrinkCardProps[];
}
interface DrinkSearchVariables {
  fuzzySearchDrinksByNameSearchTerm: string;
  fuzzySearchDrinksByNameLimit: number;
  fuzzySearchDrinksByNameOffset: number;
}

const SearchPage = () => {
  const classes = useStyles();
  const largerThan600 = useMediaQuery("(min-width:600px)");

  const [searchInput, setSearchInput] = useState<string>("");

  const { loading, error, data } = useQuery<
    DrinkSearchData,
    DrinkSearchVariables
  >(FUZZY_DRINK_SEARCH, {
    variables: {
      fuzzySearchDrinksByNameSearchTerm: searchInput,
      fuzzySearchDrinksByNameOffset: 0,
      fuzzySearchDrinksByNameLimit: 8,
    },
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSearchChangeHandler = (e: object & { target: { value: string } }) => {
    setSearchInput(e.target.value);
    console.log("change");
  };

  const onFilterChangeHandler = (e: object, value: string[]) => {
    // console.log("filter change");
    // const ingredients = value;
    // ingredientsRef.current = ingredients;
    // if (ingredients === [] || ingredients.length === 0) {
    //   console.log("getting popular 2");
    //   setPopularDrinks();
    // } else {
    //   setErrorMessage(null);
    //   searchDrinkByIngredients(ingredients)
    //     .then((res) => {
    //       const drinks = res.data.drinks;
    //       console.log(drinks);
    //       if (ingredientsRef.current === ingredients) {
    //         if (drinks !== "None Found") {
    //           setDrinks(drinks);
    //         } else {
    //           setDrinks(null);
    //           setErrorMessage(formatErrorMessage(ingredients));
    //         }
    //       }
    //     })
    //     .catch((err) => console.error(err));
    // }
  };

  const myRef = useRef(data);

  if (data) {
    myRef.current = data;
  }

  return (
    <>
      <SearchBar
        onChangeHandler={onSearchChangeHandler}
        onFilterChangeHandler={onFilterChangeHandler}
        // setPopularDrinks={setPopularDrinks}
      />

      {/* {!drinks && !errorMessage && <Loading />} */}
      {myRef.current && (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          className={classes.resultsGridContainer}
        >
          {myRef.current.fuzzySearchDrinksByName.map(
            (drink: DrinkCardProps) => (
              <Grid
                item
                key={drink.name}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.resultsGridItem}
                style={{
                  height:
                    largerThan600 && drink.ingredients.length > 0 ? "60vh" : "",
                }}
              >
                <Link
                  to={`/drink/${drink.name}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <DrinkCard drink={drink} />
                </Link>
              </Grid>
            )
          )}
        </Grid>
      )}
      {errorMessage && (
        <Container>
          <Typography
            variant="h4"
            color="textPrimary"
            className={classes.errorMessage}
            align="center"
          >
            {errorMessage}
          </Typography>
        </Container>
      )}
    </>
  );
};

export default SearchPage;
