import { Drink } from "./interfaces";

export const capitalizeString = (s: string): string =>
  (s && s[0].toUpperCase() + s.slice(1)) || "";

export const capitalizeEveryWord = (s: string): string =>
  s
    .split(" ")
    .map((s) => capitalizeString(s))
    .join(" ");

export const ingredientsFromDrink = (drink: Drink): string[] => {
  let ingredients: string[] = [];
  for (let i = 1; i < 16; i++) {
    let ingredient = drink[`strIngredient${i}` as keyof Drink];
    if (ingredient) {
      ingredients.push(capitalizeEveryWord(ingredient));
    }
  }

  return ingredients;
};
