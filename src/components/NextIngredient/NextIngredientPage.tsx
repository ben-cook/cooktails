import { useQuery } from "@apollo/client";
import { Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  NEXT_INGREDIENT_PAGE_QUERY,
  NextIngredientData,
  NextIngredientVariables,
} from "../../apollo/NextIngredientPageQuery";
import { capitalizeEveryWord } from "../../util";
import { ingredients as allIngredients } from "../ingredients";
import SmallDrinkCard from "./SmallDrinkCard";
import SmallIngredientCard from "./SmallIngredientCard";
import Suggestion from "./Suggestion";

const useStyles = makeStyles({
  ingredientsAutocomplete: { marginTop: "2vh" },
  nextButton: {
    marginTop: "2vh",
    marginBottom: "2vh",
    textTransform: "capitalize",
    margin: "auto",
  },
  addIcons: {
    marginRight: "0.5em",
    height: "0.8em",
    width: "0.8em",
  },
  backButton: {
    margin: "auto",
    marginTop: "1vh",
    "&:hover": { cursor: "pointer" },
  },
  gridContainer: { flexGrow: 1, width: "100%" },
  cardContainer: { marginTop: "1vh" },
  heading: { marginBottom: "1vh", marginTop: "1vh" },
});

const NextIngredientPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [ingredients, setIngredients] = useState<string[]>([]);

  const removeListItem = (item: string): void => {
    let newIngredients: string[] = [];
    ingredients.forEach((ingredient) => {
      if (ingredient !== item) {
        newIngredients.push(ingredient);
      }
    });

    setIngredients(newIngredients);
  };

  const addlistItem = (item: string): void => {
    let newIngredients: string[] = [...ingredients];
    if (!newIngredients.includes(item)) {
      newIngredients.push(item);
      setIngredients(newIngredients);
    }
  };

  const onIngredientSelect = (
    _: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    value && addlistItem(value);
  };

  const { data } = useQuery<NextIngredientData, NextIngredientVariables>(
    NEXT_INGREDIENT_PAGE_QUERY,
    {
      variables: {
        ingredientsToBuyIngredientNames: ingredients,
        drinksThatCanBeMadeWithIngredientsIngredientNames: ingredients,
      },
    }
  );

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        className={classes.gridContainer}
      >
        <Grid item container xs={2} sm={1}>
          <NavigateBeforeIcon
            className={classes.backButton}
            onClick={() => history.push("/")}
          />
        </Grid>

        <Grid item xs zeroMinWidth>
          <Autocomplete
            id="tags-outlined"
            options={allIngredients}
            getOptionLabel={(option) => capitalizeEveryWord(option)}
            filterSelectedOptions
            className={classes.ingredientsAutocomplete}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Add ingredients you have!"
              />
            )}
            renderOption={(option) => (
              <Fragment>
                <AddIcon className={classes.addIcons} />{" "}
                {capitalizeEveryWord(option)}
              </Fragment>
            )}
            onChange={onIngredientSelect}
            blurOnSelect
            clearOnBlur
          />
        </Grid>
      </Grid>

      <Typography variant="h4" className={classes.heading}>
        Ingredients:
      </Typography>
      {ingredients.length === 0 && (
        <Typography variant="subtitle1" align="center">
          Add an ingredient to get started.
        </Typography>
      )}
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
        className={classes.cardContainer}
      >
        {ingredients.map((ingredient) => (
          <Grid item key={ingredient} xs={6} sm={4} md={3} lg={2}>
            <SmallIngredientCard
              name={ingredient}
              removeItem={removeListItem}
            />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" className={classes.heading}>
        Drinks:
      </Typography>
      {data?.drinksThatCanBeMadeWithIngredients.length === 0 && (
        <Typography variant="subtitle1" align="center">
          Add more ingredients to see drinks that you can make.
        </Typography>
      )}
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
        className={classes.cardContainer}
      >
        {data?.drinksThatCanBeMadeWithIngredients.map((drink) => (
          <Grid item key={drink.name} xs={6} sm={4} md={3} lg={2}>
            <Link
              to={`/drink/${drink.name}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <SmallDrinkCard {...drink} />
            </Link>
          </Grid>
        ))}
      </Grid>

      {data?.ingredientsToBuy && data?.ingredientsToBuy.length > 0 && (
        <Typography variant="h4" className={classes.heading}>
          Suggestions:
        </Typography>
      )}

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
        className={classes.cardContainer}
      >
        {data?.ingredientsToBuy &&
          [...data?.ingredientsToBuy]
            .sort(
              (a, b) =>
                b.drinksThatCouldBeMade.length - a.drinksThatCouldBeMade.length
            )
            .slice(0, 8)
            .map((ingredientToBuy, idx) => (
              <Grid
                item
                key={ingredientToBuy.ingredient.name}
                xs={12}
                sm={12}
                md={6}
                lg={6}
              >
                <Suggestion {...ingredientToBuy} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default NextIngredientPage;
