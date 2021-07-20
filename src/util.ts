export const REACT_APP_API_KEY = 9973533;
export const REACT_APP_CORS_PROXY_URL =
  "https://fierce-mountain-04762.herokuapp.com/";

export const capitalizeString = (s: string): string =>
  (s && s[0].toUpperCase() + s.slice(1)) || "";

export const capitalizeEveryWord = (s: string): string =>
  s
    .split(" ")
    .map((s) => capitalizeString(s))
    .join(" ");

export const replaceSpaceWithUnderscore = (s: string): string =>
  s
    .split("")
    .map((char) => (char === " " ? "_" : char))
    .join("");

export const listInEnglish = (items: string[]): string => {
  if (items.length === 0) {
    return "";
  }

  let itemsUpper = items.map(capitalizeEveryWord);

  const recursiveFormat = (innerItems: string[]): string => {
    let string;

    console.log(innerItems);

    if (innerItems.length === 1) {
      string = innerItems[0];
    } else if (innerItems.length === 2) {
      string = `${recursiveFormat(
        innerItems.slice(0, 1)
      )} and ${recursiveFormat(innerItems.slice(1))}`;
    } else {
      string = `${innerItems[0]}, ${recursiveFormat(innerItems.slice(1))}`;
    }

    return string;
  };

  return recursiveFormat(itemsUpper);
};
