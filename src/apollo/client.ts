import { ApolloClient, InMemoryCache } from "@apollo/client";

const localhost = "http://localhost:4000/";
const heroku = "https://cooktails-graphql.herokuapp.com/";

export const client = new ApolloClient({
  uri: heroku,
  cache: new InMemoryCache(),
});
