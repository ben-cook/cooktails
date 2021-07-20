import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const SmallDrinkCard = ({
  name,
  strDrinkThumb,
}: {
  name: string;
  strDrinkThumb: string;
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia image={strDrinkThumb} className={classes.image} />

      <CardContent>
        <Typography variant="h6" className={classes.text}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SmallDrinkCard;
