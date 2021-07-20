import { makeStyles } from "@material-ui/core/styles";
import ReactLoading from "react-loading";

const useStyles = makeStyles({
  root: { paddingTop: "15vh", margin: "auto", maxHeight: 100, maxWidth: 100 },
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
