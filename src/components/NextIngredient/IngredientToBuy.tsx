import { Typography } from "@material-ui/core";

import { IIngredientToBuy } from "../../apollo/NextIngredientPageQuery";

const IngredientToBuy = ({
  ingredient,
  drinksThatCouldBeMade,
}: IIngredientToBuy) => {
  return (
    <>
      <Typography>If you bought {ingredient.name}, you could make:</Typography>
      <ul>
        {drinksThatCouldBeMade.map((drink, idx) => (
          <li key={idx}>
            <Typography>{drink.name}</Typography>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientToBuy;
