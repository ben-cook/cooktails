import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

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
});

const SmallIngredientCard = ({
  name,
  removeItem,
}: {
  name: string;
  removeItem: (name: string) => void;
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions>
        <ClearIcon className={classes.icon} onClick={() => removeItem(name)} />
      </CardActions>
      <CardMedia
        image={getIngredientImageURL(name)}
        className={classes.image}
      />

      <CardContent>
        <Typography variant="h6" className={classes.text}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SmallIngredientCard;
