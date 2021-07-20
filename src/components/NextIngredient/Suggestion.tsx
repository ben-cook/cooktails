import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { Link } from "react-router-dom";

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
    marginBottom: "1vw",
    marginRight: "1vw",
  },
});

const Suggestion = ({
  ingredient,
  drinksThatCouldBeMade,
}: IIngredientToBuy) => {
  const classes = useStyles();

  const largerThan540 = useMediaQuery("(min-width:540px)");

  return (
    <Paper className={classes.root} variant="outlined">
      <Grid container justifyContent="center" alignItems="stretch">
        <Grid item xs className={classes.cardOutline}>
          {/* Image Card*/}
          <Link
            to={`/ingredient/${ingredient.name}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Card variant="outlined" style={{ height: "100%" }}>
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
          </Link>
        </Grid>

        {/* Arrow Icon*/}
        <Grid item>
          <Grid
            container
            direction="column"
            alignContent="center"
            justifyContent="center"
            style={{ height: "100%", minWidth: "1em" }}
          >
            <ArrowForwardIcon />
          </Grid>
        </Grid>

        {/* Desktop Sized Drinks*/}
        {largerThan540 &&
          drinksThatCouldBeMade.map((drink, idx) => (
            <React.Fragment key={drink.name}>
              {idx > 0 && (
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    alignContent="center"
                    justifyContent="center"
                    style={{ height: "100%", minWidth: "1em" }}
                  >
                    <AddIcon />
                  </Grid>
                </Grid>
              )}

              <Grid item xs className={classes.cardOutline}>
                <Link
                  to={`/drink/${drink.name}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <Card variant="outlined" style={{ height: "100%" }}>
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
                </Link>
              </Grid>
            </React.Fragment>
          ))}

        {/* Mobile Sized Drinks*/}
        {!largerThan540 && (
          <Grid
            container
            item
            xs
            direction="column"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            {drinksThatCouldBeMade.map((drink, idx) => (
              <React.Fragment key={drink.name}>
                {idx > 0 && (
                  <Grid item style={{ width: "100%" }}>
                    <Grid
                      container
                      direction="column"
                      alignContent="center"
                      justifyContent="center"
                      style={{ height: "100%", minWidth: "1em" }}
                    >
                      <AddIcon />
                    </Grid>
                  </Grid>
                )}

                <Grid item style={{ width: "100%" }}>
                  <Link
                    to={`/drink/${drink.name}`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
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
                  </Link>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default Suggestion;
