import { gql } from "@apollo/client";

export const INGREDIENT_SEARCH_BY_NAME = gql`
  query SearchIngredientByName($findIngredientByNameName: String) {
    findIngredientByName(name: $findIngredientByNameName) {
      name
      description
      type
      alcoholic
      ABV
    }
  }
`;

export interface IngredientData {
  name: string;
  description: string;
  type: string;
  alcoholic: boolean;
  ABV: string;
}
export interface IngredientSearchData {
  findIngredientByName: IngredientData;
}
export interface IngredientSearchVariables {
  findIngredientByNameName: string;
}
