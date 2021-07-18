import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Ingredient } from "../../interfaces";
import Loading from "../Loading";
import {
  IngredientSearchData,
  IngredientSearchVariables,
  INGREDIENT_SEARCH_BY_NAME,
} from "../../apollo/IngredientSearchByName";
import { useQuery } from "@apollo/client";

const useStyles = makeStyles({
  root: { height: "100%", marginTop: "5vh" },
  image: {
    height: "75vh",
  },
  ingredients: {
    marginTop: "1vh",
  },
});

const IngredientPage = ({ name }: { name: string }) => {
  const classes = useStyles();

  const { loading, data } = useQuery<
    IngredientSearchData,
    IngredientSearchVariables
  >(INGREDIENT_SEARCH_BY_NAME, {
    variables: {
      findIngredientByNameName: name,
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        image={`https://www.thecocktaildb.com/images/ingredients/${data?.findIngredientByName.name?.replaceAll(
          " ",
          "%20"
        )}.png`}
        className={classes.image}
      />

      <CardContent>
        <Typography variant="h2">
          {data?.findIngredientByName.name}
          {/* <Typography variant="body1">{ingredient.idIngredient}</Typography> */}
        </Typography>
        <Typography variant="body1">
          {data?.findIngredientByName.description}
        </Typography>

        {data?.findIngredientByName.ABV && (
          <Typography variant="h6">
            {data?.findIngredientByName.ABV}% ABV
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default IngredientPage;
