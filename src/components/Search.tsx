import { useEffect, useState, useRef } from "react";
import { Drink } from "../interfaces";
import DrinkCard from "./DrinkCard";
import { getPopularDrinks, searchDrinkByName } from "../api";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  gridContainer: { flexGrow: 1 },
  gridItem: {},
  searchbar: { marginTop: "2vh", marginBottom: "2vh", width: "100%" },
});

const Search = () => {
  const classes = useStyles();
  const largerThan600 = useMediaQuery("(min-width:600px)");

  const queryRef = useRef("");
  const [drinks, setDrinks] = useState<Drink[] | null>(null);

  const setPopularDrinks = () => {
    getPopularDrinks()
      .then((res) => {
        let drinks = res.data.drinks;
        setDrinks(drinks);
        console.log(drinks);
      })
      .catch((err) => console.error(err));
  };

  const onChangeHandler = (e: object & { target: { value: string } }) => {
    const newText = e.target.value;
    queryRef.current = newText;

    if (newText === "") {
      setPopularDrinks();
    } else {
      searchDrinkByName(newText)
        .then((res) => {
          if (queryRef.current === newText) {
            let drinks = res.data.drinks;
            if (drinks) {
              setDrinks(drinks);
            }
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
      <TextField
        className={classes.searchbar}
        label="Search for a drink"
        variant="outlined"
        onChange={onChangeHandler}
      />
      {!drinks && <p>loading</p>}
      {drinks && (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          className={classes.gridContainer}
        >
          {drinks.map((drink: Drink) => (
            <Grid
              item
              key={drink.idDrink}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.gridItem}
              style={{ height: largerThan600 ? "60vh" : "" }}
            >
              <DrinkCard drink={drink} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Search;
