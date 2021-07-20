import { gql } from "@apollo/client";

export const NEXT_INGREDIENT_PAGE_QUERY = gql`
  query NextIngredientToBuyQuery(
    $drinksThatCanBeMadeWithIngredientsIngredientNames: [String]
    $ingredientsToBuyIngredientNames: [String]
  ) {
    ingredientsToBuy(ingredientNames: $ingredientsToBuyIngredientNames) {
      ingredient {
        name
      }
      drinksThatCouldBeMade {
        name
      }
    }
    drinksThatCanBeMadeWithIngredients(
      ingredientNames: $drinksThatCanBeMadeWithIngredientsIngredientNames
    ) {
      name
    }
  }
`;

export interface IIngredientToBuy {
  ingredient: { name: string };
  drinksThatCouldBeMade: { name: string }[];
}

export interface NextIngredientData {
  ingredientsToBuy: IIngredientToBuy[];
  drinksThatCanBeMadeWithIngredients: { name: string }[];
}

export interface NextIngredientVariables {
  ingredientsToBuyIngredientNames: string[];
  drinksThatCanBeMadeWithIngredientsIngredientNames: string[];
}
