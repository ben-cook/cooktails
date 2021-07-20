import { gql } from "@apollo/client";

import { DrinkCardProps } from "../components/SearchPage/DrinkCard";

export const FIND_DRINKS_WITH_INGREDIENTS = gql`
  query findDrinksWithIngredients(
    $findDrinksWithIngredientsIngredientNames: [String]
    $findDrinksWithIngredientsLimit: Int
    $findDrinksWithIngredientsOffset: Int
  ) {
    findDrinksWithIngredients(
      ingredientNames: $findDrinksWithIngredientsIngredientNames
      limit: $findDrinksWithIngredientsLimit
      offset: $findDrinksWithIngredientsOffset
    ) {
      name
      ingredients {
        name
      }
      strDrinkThumb
    }
  }
`;

export interface FindDrinksWithIngredientsData {
  findDrinksWithIngredients: DrinkCardProps[];
}

export interface FindDrinksWithIngredientsVariables {
  findDrinksWithIngredientsIngredientNames: string[];
  findDrinksWithIngredientsLimit: number;
  findDrinksWithIngredientsOffset: number;
}
