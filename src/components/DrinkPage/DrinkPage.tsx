import { useQuery } from "@apollo/client";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player/youtube";

import {
  DRINK_SEARCH_BY_NAME,
  DrinkSearchData,
  DrinkSearchVariables,
} from "../../apollo/DrinkSearchByName";
import Loading from "../Loading";
import IngredientTable from "./IngredientTable";

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

type DrinkPageProps = { name: string };

const DrinkPage = ({ name }: DrinkPageProps) => {
  const classes = useStyles();
  const { loading, data } = useQuery<DrinkSearchData, DrinkSearchVariables>(
    DRINK_SEARCH_BY_NAME,
    {
      variables: {
        findDrinkByNameName: name,
      },
    }
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Card className={classes.root}>
      {data?.findDrinkByName?.strDrinkThumb && (
        <CardMedia
          image={data.findDrinkByName.strDrinkThumb}
          className={classes.image}
        />
      )}

      <CardContent>
        <Typography variant="h2">
          {data?.findDrinkByName?.name}
          {/* <Typography variant="body1">{drink.idDrink}</Typography> */}
        </Typography>
        <Typography variant="h4">Recipe</Typography>
        <Typography variant="h6">
          {data?.findDrinkByName?.instructions}
        </Typography>

        {data && (
          <div className={classes.ingredients}>
            <IngredientTable drink={data.findDrinkByName} />
          </div>
        )}

        {data?.findDrinkByName?.strVideo && (
          <ReactPlayer
            url={data?.findDrinkByName?.strVideo}
            className={classes.video}
            width="80%"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default DrinkPage;
