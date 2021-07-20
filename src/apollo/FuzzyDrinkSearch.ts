import { gql } from "@apollo/client";

import { DrinkCardProps } from "../components/SearchPage/DrinkCard";

export const FUZZY_DRINK_SEARCH = gql`
  query FuzzyDrinkSearch(
    $fuzzySearchDrinksByNameSearchTerm: String
    $fuzzySearchDrinksByNameLimit: Int
    $fuzzySearchDrinksByNameOffset: Int
  ) {
    fuzzySearchDrinksByName(
      searchTerm: $fuzzySearchDrinksByNameSearchTerm
      limit: $fuzzySearchDrinksByNameLimit
      offset: $fuzzySearchDrinksByNameOffset
    ) {
      name
      ingredients {
        name
      }
      strDrinkThumb
    }
  }
`;

export interface FuzzyDrinkSearchData {
  fuzzySearchDrinksByName: DrinkCardProps[];
}
export interface FuzzyDrinkSearchVariables {
  fuzzySearchDrinksByNameSearchTerm: string;
  fuzzySearchDrinksByNameLimit: number;
  fuzzySearchDrinksByNameOffset: number;
}
