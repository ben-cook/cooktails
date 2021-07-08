import { useGetIngredientsByNameQuery } from "../../redux/reduxAPI";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Ingredient } from "../../interfaces";
import Loading from "../Loading";

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

  const { data, error, isLoading } = useGetIngredientsByNameQuery(name);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h6>error!</h6>;
  }

  const ingredient = data!.ingredients[0] as Ingredient;
  console.log(ingredient);

  return (
    <Card className={classes.root}>
      <CardMedia
        image={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient?.replaceAll(
          " ",
          "%20"
        )}.png`}
        className={classes.image}
      />

      <CardContent>
        <Typography variant="h2">
          {ingredient.strIngredient}
          {/* <Typography variant="body1">{ingredient.idIngredient}</Typography> */}
        </Typography>
        <Typography variant="body1">{ingredient.strDescription}</Typography>

        {ingredient.strABV && (
          <Typography variant="h6">{ingredient.strABV}% ABV</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default IngredientPage;
