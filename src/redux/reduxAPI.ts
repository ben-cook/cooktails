import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Drink, Ingredient } from "../interfaces";
import { withCors } from "../api";
import { REACT_APP_API_KEY } from "../util";

interface DrinksResponse {
  drinks: Drink[];
}

interface IngredientsResponse {
  ingredients: Ingredient[];
}

export const drinksAPI = createApi({
  reducerPath: "drinksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: withCors(`www.thecocktaildb.com/api/json/v2/${REACT_APP_API_KEY}`),
  }),
  endpoints: (builder) => ({
    getDrinkByID: builder.query<DrinksResponse, string>({
      query: (id) => `lookup.php?i=${id}`,
    }),

    getDrinksByName: builder.query<DrinksResponse, string>({
      query: (name) => `search.php?s=${name}`,
    }),

    getIngredientsByName: builder.query<IngredientsResponse, string>({
      query: (name) => `search.php?i=${name}`,
    }),
  }),
});

export const {
  useGetDrinkByIDQuery,
  useGetDrinksByNameQuery,
  useGetIngredientsByNameQuery,
} = drinksAPI;
