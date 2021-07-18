import { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import SearchBar from "./SearchBar";
import { capitalizeEveryWord } from "../../util";
import { useQuery } from "@apollo/client";
import {
  FuzzyDrinkSearchData,
  FuzzyDrinkSearchVariables,
  FUZZY_DRINK_SEARCH,
} from "../../apollo/FuzzyDrinkSearch";
import {
  FindDrinksWithIngredientsData,
  FindDrinksWithIngredientsVariables,
  FIND_DRINKS_WITH_INGREDIENTS,
} from "../../apollo/FindDrinksWithIngredients";
import SearchResults from "./SearchResults";

const useStyles = makeStyles({
  resultsGridContainer: { flexGrow: 1 },
  resultsGridItem: {},
  errorMessage: { margin: "auto", marginTop: "1.5em" },
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

const SearchPage = () => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = useState<string>("");
  const [filterInput, setFilterInput] = useState<string[]>([]);

  type DisplayType = "search" | "ingredientFilter";
  const [displayType, setDisplayType] = useState<DisplayType>("search");

  const { data: searchDrinkData } = useQuery<
    FuzzyDrinkSearchData,
    FuzzyDrinkSearchVariables
  >(FUZZY_DRINK_SEARCH, {
    variables: {
      fuzzySearchDrinksByNameSearchTerm: searchInput,
      fuzzySearchDrinksByNameOffset: 0,
      fuzzySearchDrinksByNameLimit: 8,
    },
  });

  const { data: ingredientFilterData } = useQuery<
    FindDrinksWithIngredientsData,
    FindDrinksWithIngredientsVariables
  >(FIND_DRINKS_WITH_INGREDIENTS, {
    variables: {
      findDrinksWithIngredientsIngredientNames: filterInput,
      findDrinksWithIngredientsOffset: 0,
      findDrinksWithIngredientsLimit: 8,
    },
  });

  const onSearchChangeHandler = (e: object & { target: { value: string } }) => {
    setSearchInput(e.target.value);
    setDisplayType("search");
    console.log("change");
  };

  const onFilterChangeHandler = (e: object, value: string[]) => {
    setFilterInput(value);
    setDisplayType("ingredientFilter");
    console.log("filter change");
  };

  const searchDataRef = useRef(searchDrinkData);

  if (searchDrinkData) {
    searchDataRef.current = searchDrinkData;
  }

  return (
    <>
      <SearchBar
        onChangeHandler={onSearchChangeHandler}
        onFilterChangeHandler={onFilterChangeHandler}
      />

      {/* {!drinks && !errorMessage && <Loading />} */}
      {displayType === "search" && searchDataRef.current && (
        <SearchResults drinks={searchDataRef.current.fuzzySearchDrinksByName} />
      )}
      {displayType === "ingredientFilter" && ingredientFilterData && (
        <SearchResults
          drinks={ingredientFilterData.findDrinksWithIngredients}
        />
      )}

      {displayType === "ingredientFilter" &&
        ingredientFilterData?.findDrinksWithIngredients.length === 0 && (
          <Container>
            <Typography
              variant="h4"
              color="textPrimary"
              className={classes.errorMessage}
              align="center"
            >
              {formatErrorMessage(filterInput)}
            </Typography>
          </Container>
        )}
    </>
  );
};

export default SearchPage;
