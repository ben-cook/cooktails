import { useQuery } from "@apollo/client";
import { Container, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState } from "react";

import {
  FIND_DRINKS_WITH_INGREDIENTS,
  FindDrinksWithIngredientsData,
  FindDrinksWithIngredientsVariables,
} from "../../apollo/FindDrinksWithIngredients";
import {
  FUZZY_DRINK_SEARCH,
  FuzzyDrinkSearchData,
  FuzzyDrinkSearchVariables,
} from "../../apollo/FuzzyDrinkSearch";
import { capitalizeEveryWord, listInEnglish } from "../../util";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const useStyles = makeStyles({
  resultsGridContainer: { flexGrow: 1 },
  resultsGridItem: {},
  errorMessage: { margin: "auto", marginTop: "1.5em" },
});

const formatErrorMessage = (ingredients: string[]): string => {
  let ingredientsUpper = ingredients.map(capitalizeEveryWord);
  return `Couldn't find any drinks with ${listInEnglish(ingredientsUpper)}.`;
};

const SearchPage = () => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = useState<string>("");
  const [filterInput, setFilterInput] = useState<string[]>([]);

  type DisplayType = "search" | "ingredientFilter";
  const [displayType, setDisplayType] = useState<DisplayType>("search");

  const largerThan600 = useMediaQuery("(min-width:600px)");

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
  };

  const onFilterChangeHandler = (e: object, value: string[]) => {
    setFilterInput(value);
    setDisplayType("ingredientFilter");
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
        largerThan600={largerThan600}
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
