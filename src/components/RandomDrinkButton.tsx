import { Typography, Button } from "@material-ui/core";

interface RandomDrinkButtonProps {
  randomDrinkHandler: () => void;
  className: string;
  buttonText: string;
}
const RandomDrinkButton = ({
  randomDrinkHandler,
  className,
  buttonText,
}: RandomDrinkButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="default"
      className={className}
      // fullWidth
    >
      <Typography variant="body1" onClick={randomDrinkHandler}>
        {buttonText}
      </Typography>
    </Button>
  );
};

export default RandomDrinkButton;
