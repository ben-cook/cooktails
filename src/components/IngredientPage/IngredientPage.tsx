import { useQuery } from "@apollo/client";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  INGREDIENT_SEARCH_BY_NAME,
  IngredientSearchData,
  IngredientSearchVariables,
} from "../../apollo/IngredientSearchByName";
import { getIngredientImageURL } from "../../util";
import Loading from "../Loading";

const useStyles = makeStyles({
  root: { height: "100%", marginTop: "5vh" },
  image: {
    height: "75vh",
  },
  ingredients: {
    marginTop: "1vh",
  },
  alcoholicTag: { marginLeft: "1rem" },
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
    <Card className={classes.root} variant="outlined">
      {data?.findIngredientByName && (
        <CardMedia
          image={getIngredientImageURL(data?.findIngredientByName.name)}
          className={classes.image}
        />
      )}

      <CardContent>
        <Typography variant="h2" display="inline">
          {data?.findIngredientByName.name}
        </Typography>
        <Typography
          variant="subtitle1"
          display="inline"
          className={classes.alcoholicTag}
        >
          {data?.findIngredientByName.alcoholic &&
            `alcoholic${
              data?.findIngredientByName.ABV
                ? ` - ${data?.findIngredientByName.ABV}% abv`
                : ""
            }`}
          {data?.findIngredientByName.alcoholic !== undefined &&
            !data?.findIngredientByName.alcoholic &&
            "non-alcoholic"}
        </Typography>

        <Typography variant="body1">
          {data?.findIngredientByName.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default IngredientPage;
