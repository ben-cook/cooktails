import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Fragment, useState } from "react";
import { capitalizeEveryWord, listInEnglish } from "../../util";
import { makeStyles } from "@material-ui/core/styles";
import { ingredients as allIngredients } from "../ingredients";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  NextIngredientData,
  NextIngredientVariables,
  NEXT_INGREDIENT_PAGE_QUERY,
} from "../../apollo/NextIngredientPageQuery";
import IngredientToBuy from "./IngredientToBuy";

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
    newIngredients.push(item);
    setIngredients(newIngredients);
  };

  const onIngredientSelect = (
    _: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    console.log(value);
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

      <List component={Box}>
        {ingredients.map((ingredient) => (
          <ListItem
            key={ingredient}
            button
            onClick={() => removeListItem(ingredient)}
          >
            <ListItemIcon>
              <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary={ingredient} />
          </ListItem>
        ))}
      </List>

      {ingredients.length === 0 && (
        <Typography variant="h4">
          You can't make any drinks without any ingredients! Try adding some
          ingredients to your bar.
        </Typography>
      )}

      {ingredients.length > 0 &&
        data?.drinksThatCanBeMadeWithIngredients.length === 0 && (
          <Typography variant="h4">
            Almost there! Keep adding more ingredients to your bar.
          </Typography>
        )}

      {data?.drinksThatCanBeMadeWithIngredients.length != 0 && (
        <Typography variant="h6">
          {`With these ingredients, you can make ${
            data?.drinksThatCanBeMadeWithIngredients.length
          } drink${
            data?.drinksThatCanBeMadeWithIngredients.length === 1 ? ":" : "s:"
          } 
              ${
                data?.drinksThatCanBeMadeWithIngredients &&
                listInEnglish(
                  data.drinksThatCanBeMadeWithIngredients.map(
                    (drink) => drink.name
                  )
                )
              }`}
        </Typography>
      )}

      {data?.ingredientsToBuy && data?.ingredientsToBuy.length > 0 && (
        <Typography variant="h6">Looking for inspiration?</Typography>
      )}

      {data?.ingredientsToBuy &&
        data?.ingredientsToBuy.length > 0 &&
        [...data?.ingredientsToBuy]
          .slice(0, 8)
          .sort(
            (a, b) =>
              b.drinksThatCouldBeMade.length - a.drinksThatCouldBeMade.length
          )
          .map((obj) => <IngredientToBuy {...obj} />)}
    </>
  );
};

export default NextIngredientPage;
