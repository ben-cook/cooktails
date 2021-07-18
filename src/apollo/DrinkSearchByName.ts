import { gql } from "@apollo/client";

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

export interface DrinkData {
  name: string;
  ingredients: { name: string }[];
  measures: string[];
  strDrinkThumb: string;
  instructions: string;
  strVideo: string;
}
export interface DrinkSearchData {
  findDrinkByName: DrinkData;
}
export interface DrinkSearchVariables {
  findDrinkByNameName: string;
}
