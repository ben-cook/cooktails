import image from "./logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "7vh",
    margin: "auto",
    display: "block",
  },
});

const Header = () => {
  const classes = useStyles();

  return <img src={image} alt="logo" className={classes.root} />;
};

export default Header;
