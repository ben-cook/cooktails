import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://cooktails-graphql.herokuapp.com/",
  cache: new InMemoryCache(),
});
