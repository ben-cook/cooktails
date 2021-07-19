import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Fragment, useState } from "react";
import { capitalizeEveryWord } from "../../util";
import { makeStyles } from "@material-ui/core/styles";
import { sortedIngredients as allIngredients } from "../ingredients";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  ingredientsAutocomplete: { paddingTop: "2vh" },
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
    "&:hover": { cursor: "pointer" },
  },
  backButton: { marginTop: "2vh", height: "1.5em", width: "1.5em" },
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

  return (
    <>
      <NavigateBeforeIcon
        className={classes.backButton}
        onClick={() => history.goBack()}
      />

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
            label="Add an ingredient!"
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

      <Box textAlign="center">
        <Button
          variant="outlined"
          color="default"
          className={classes.nextButton}
          onClick={() => console.log("click")}
        >
          <Typography variant="body1">Show me what to get next!</Typography>
        </Button>
      </Box>
    </>
  );
};

export default NextIngredientPage;
