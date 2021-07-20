import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import DrinkCard, { DrinkCardProps } from "./DrinkCard";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
});

const SearchResults = ({
  drinks,
  largerThan600,
}: {
  drinks: DrinkCardProps[];
  largerThan600: boolean;
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      className={classes.root}
    >
      {drinks.map((drink: DrinkCardProps) => (
        <Grid
          item
          key={drink.name}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          style={{
            height: largerThan600 && drink.ingredients.length > 0 ? "60vh" : "",
          }}
        >
          <Link
            to={`/drink/${drink.name}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <DrinkCard drink={drink} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResults;
