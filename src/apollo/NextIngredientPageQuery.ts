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
        strDrinkThumb
      }
    }

    drinksThatCanBeMadeWithIngredients(
      ingredientNames: $drinksThatCanBeMadeWithIngredientsIngredientNames
    ) {
      name
      strDrinkThumb
    }

    #ingredients {
    #  name
    #}
  }
`;

export interface IIngredientToBuy {
  ingredient: { name: string };
  drinksThatCouldBeMade: { name: string; strDrinkThumb: string }[];
}

export interface NextIngredientData {
  ingredientsToBuy: IIngredientToBuy[];
  drinksThatCanBeMadeWithIngredients: { name: string; strDrinkThumb: string }[];
  // ingredients: { name: string }[];
}

export interface NextIngredientVariables {
  ingredientsToBuyIngredientNames: string[];
  drinksThatCanBeMadeWithIngredientsIngredientNames: string[];
}
