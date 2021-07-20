import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { IIngredientToBuy } from "../../apollo/NextIngredientPageQuery";
import { getIngredientImageURL } from "../../util";

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
  cardOutline: {
    marginLeft: "1vw",
    marginTop: "1vw",
    marginRight: "1vw",
    height: "95%",
  },
});

const Suggestion = ({
  ingredient,
  drinksThatCouldBeMade,
}: IIngredientToBuy) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" alignContent="stretch">
        <Grid item xs>
          <Card className={classes.cardOutline} variant="outlined">
            <CardMedia
              image={getIngredientImageURL(ingredient.name)}
              className={classes.image}
            />

            <CardContent>
              <Typography variant="h6" className={classes.text}>
                {ingredient.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item style={{ width: "3em" }}>
          <Grid
            container
            direction="column"
            alignContent="center"
            justifyContent="center"
            style={{ height: "100%" }}
          >
            <ArrowForwardIcon />
          </Grid>
        </Grid>

        {/* <Divider orientation="vertical" /> */}

        {drinksThatCouldBeMade.map((drink, idx) => (
          <>
            {idx > 0 && (
              <Grid item style={{ width: "3em" }}>
                <Grid
                  container
                  direction="column"
                  alignContent="center"
                  justifyContent="center"
                  style={{ height: "100%" }}
                >
                  <AddIcon />
                </Grid>
              </Grid>
            )}
            <Grid item xs>
              <Card className={classes.cardOutline} variant="outlined">
                <CardMedia
                  image={drink.strDrinkThumb}
                  className={classes.image}
                />

                <CardContent>
                  <Typography variant="h6" className={classes.text}>
                    {drink.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>

      {/* <CardContent>
        <Typography variant="body1" className={classes.text}>
          Buying{" "}
          <Link to={`/ingredient/${ingredient.name}`}>{ingredient.name}</Link>{" "}
          will allow you to make a{" "}
          {listInEnglish(drinksThatCouldBeMade.map((drink) => drink.name))}.
        </Typography>
      </CardContent> */}
    </div>
  );
};

export default Suggestion;
