import ReactLoading from "react-loading";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: { paddingTop: "15vh", margin: "auto" },
});

const Loading = () => {
  const classes = useStyles();

  return (
    <ReactLoading
      type={"spinningBubbles"}
      color={"black"}
      height={"10vh"}
      width={"20vw"}
      className={classes.root}
    />
  );
};

export default Loading;
