import { gql } from "@apollo/client";

import { DrinkData } from "../interfaces";

export const RANDOM_DRINK = gql`
  query RandomDrink {
    randomDrink {
      name
    }
  }
`;

export interface RandomDrinkData {
  randomDrink: DrinkData;
}
