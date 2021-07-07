import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { ReactElement } from "react";
import { Drink } from "../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { ingredientsFromDrink } from "../util";

const useStyles = makeStyles({
  root: { height: "100%" },
  image: {
    height: "30vh",
  },
});

const DrinkCard = ({ drink }: { drink: Drink }): ReactElement => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {drink.strDrinkThumb && (
        <CardMedia image={drink.strDrinkThumb} className={classes.image} />
      )}

      <CardContent>
        <Typography variant="h6">{drink.strDrink}</Typography>
        {/* <Typography variant="h6">{drink.strDrinkThumb}</Typography> */}

        {ingredientsFromDrink(drink).map((ingredient, idx) => (
          <Typography variant="body1" key={idx}>
            {ingredient}
          </Typography>
        ))}

        <Typography variant="body1">{drink.idDrink}</Typography>
      </CardContent>
    </Card>
  );
};

export default DrinkCard;
