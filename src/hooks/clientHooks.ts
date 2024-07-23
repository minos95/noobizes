import { ApolloClient, InMemoryCache } from "@apollo/client";
export const clientHooks = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
