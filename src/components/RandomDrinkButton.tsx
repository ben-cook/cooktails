import { Typography, Button } from "@material-ui/core";

interface RandomDrinkButtonProps {
  randomDrinkHandler: () => void;
  className: string;
  buttonText: string;
  fullWidth?: boolean;
}
const RandomDrinkButton = ({
  randomDrinkHandler,
  className,
  buttonText,
  fullWidth,
}: RandomDrinkButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="default"
      className={className}
      fullWidth={fullWidth}
    >
      <Typography variant="body1" onClick={() => randomDrinkHandler()}>
        {buttonText}
      </Typography>
    </Button>
  );
};

export default RandomDrinkButton;
