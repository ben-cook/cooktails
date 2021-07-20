import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "material-ui-image";
import { Link } from "react-router-dom";

import { IIngredientToBuy } from "../../apollo/NextIngredientPageQuery";
import { getIngredientImageURL, listInEnglish } from "../../util";

const useStyles = makeStyles({
  root: { height: "100%" },
  image: {
    height: "20vh",
  },
  icon: {
    "&:hover": { cursor: "pointer" },
  },
  text: {},
  ingredientImage: {
    height: 200,
    width: 150,
  },
});

const SuggestionCard = ({
  ingredient,
  drinksThatCouldBeMade,
}: IIngredientToBuy) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          {/* <CardMedia
            image={getIngredientImageURL(ingredient.name)}
            className={classes.image}
          /> */}
          <Image
            src={getIngredientImageURL(ingredient.name)}
            className={classes.ingredientImage}
            style={{ height: 200, width: 150 }}
          />
        </Grid>

        {/* <Divider orientation="vertical" /> */}

        {drinksThatCouldBeMade.map((drink) => (
          <Grid item xs={3}>
            <CardMedia image={drink.strDrinkThumb} className={classes.image} />
          </Grid>
        ))}
      </Grid>

      <CardContent>
        <Typography variant="h6" className={classes.text}>
          Buying{" "}
          <Link to={`/ingredient/${ingredient.name}`}>{ingredient.name}</Link>{" "}
          will allow you to make{" "}
          {listInEnglish(drinksThatCouldBeMade.map((drink) => drink.name))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SuggestionCard;
