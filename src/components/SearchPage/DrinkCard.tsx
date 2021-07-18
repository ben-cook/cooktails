import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { ReactElement } from "react";
import { Drink } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { ingredientsFromDrink } from "../../util";
import { DrinkCardProps } from "./SearchPage";

const useStyles = makeStyles({
  root: { height: "100%" },
  image: {
    height: "30vh",
  },
});

const DrinkCard = ({ drink }: { drink: DrinkCardProps }): ReactElement => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {drink.strDrinkThumb && (
        <CardMedia image={drink.strDrinkThumb} className={classes.image} />
      )}

      <CardContent>
        <Typography variant="h6">{drink.name}</Typography>
        {/* <Typography variant="h6">{drink.strDrinkThumb}</Typography> */}

        {drink.ingredients.map((ingredient, idx) => (
          <Typography variant="body1" key={idx}>
            {ingredient.name}
          </Typography>
        ))}

        {/* <Typography variant="body1">{drink.idDrink}</Typography> */}
      </CardContent>
    </Card>
  );
};

export default DrinkCard;
