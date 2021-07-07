import { useGetDrinkByIDQuery } from "../redux/reduxAPI";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Drink } from "../interfaces";
import ReactPlayer from "react-player/youtube";
import IngredientTable from "./IngredientTable";

const useStyles = makeStyles({
  root: { height: "100%", marginTop: "5vh" },
  image: {
    height: "75vh",
  },
  ingredients: {
    marginTop: "1vh",
  },
});

const DrinkPage = ({ id }: { id: string }) => {
  const classes = useStyles();

  const { data, error, isLoading } = useGetDrinkByIDQuery(id);

  if (isLoading) {
    return <p>loading</p>;
  }

  if (error) {
    return <h6>error!</h6>;
  }

  const drinkInfo = data!.drinks[0] as Drink;
  console.log(drinkInfo);

  return (
    <Card className={classes.root}>
      {drinkInfo.strDrinkThumb && (
        <CardMedia image={drinkInfo.strDrinkThumb} className={classes.image} />
      )}

      <CardContent>
        <Typography variant="h2">
          {drinkInfo.strDrink}
          <Typography variant="body1">{drinkInfo.idDrink}</Typography>
        </Typography>
        <Typography variant="h4">Recipe</Typography>
        <Typography variant="h6">{drinkInfo.strInstructions}</Typography>

        <IngredientTable drink={drinkInfo} />

        {drinkInfo.strVideo && <ReactPlayer url={drinkInfo.strVideo} />}
      </CardContent>
    </Card>
  );
};

export default DrinkPage;
