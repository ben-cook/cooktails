import { gql } from "@apollo/client";

import { DrinkData } from "../interfaces";

export const DRINK_SEARCH_BY_NAME = gql`
  query SearchDrinkByName($findDrinkByNameName: String) {
    findDrinkByName(name: $findDrinkByNameName) {
      name
      ingredients {
        name
      }
      strDrinkThumb
      instructions
      measures
      strVideo
    }
  }
`;

export interface DrinkSearchData {
  findDrinkByName: DrinkData;
}
export interface DrinkSearchVariables {
  findDrinkByNameName: string;
}
