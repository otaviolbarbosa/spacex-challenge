import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

type ApolloProviderProps = {
  children: React.ReactNode
}

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});  

const Provider = ({children}: ApolloProviderProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export { Provider };
