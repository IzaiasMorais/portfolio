import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});
