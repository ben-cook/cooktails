import { useGetDrinkByIDQuery } from "../../redux/reduxAPI";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Drink } from "../../interfaces";
import ReactPlayer from "react-player/youtube";
import IngredientTable from "../SearchPage/IngredientTable";
import Loading from "../Loading";
import { ReactElement } from "react";

const useStyles = makeStyles({
  root: { height: "100%", marginTop: "5vh" },
  image: {
    height: "75vh",
  },
  ingredients: {
    marginTop: "2em",
  },
  video: {
    margin: "auto",
    marginTop: "2em",
  },
});

type DrinkPageProps = { id?: string; drinkObject?: Drink };

const DrinkPage = (props: DrinkPageProps) => {
  if (props.id) {
    return <DrinkPageWithAPIData id={props.id} />;
  } else {
    return <DrinkPageContents drink={props.drinkObject as Drink} />;
  }
};

const DrinkPageWithAPIData = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useGetDrinkByIDQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h6>error!</h6>;
  }

  const drinkInfo: Drink = data!.drinks[0] as Drink;
  console.log(drinkInfo);

  return <DrinkPageContents drink={drinkInfo} />;
};

const DrinkPageContents = ({ drink }: { drink: Drink }): ReactElement => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {drink.strDrinkThumb && (
        <CardMedia image={drink.strDrinkThumb} className={classes.image} />
      )}

      <CardContent>
        <Typography variant="h2">
          {drink.strDrink}
          {/* <Typography variant="body1">{drink.idDrink}</Typography> */}
        </Typography>
        <Typography variant="h4">Recipe</Typography>
        <Typography variant="h6">{drink.strInstructions}</Typography>

        <div className={classes.ingredients}>
          <IngredientTable drink={drink} />
        </div>

        {drink.strVideo && (
          <ReactPlayer
            url={drink.strVideo}
            className={classes.video}
            width="80%"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default DrinkPage;
