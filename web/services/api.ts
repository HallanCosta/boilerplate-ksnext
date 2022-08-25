import { ApolloClient, InMemoryCache } from "@apollo/client";

export const keystoneAPI = new ApolloClient({
    uri: 'http://localhost:3333/api/graphql',
    cache: new InMemoryCache(),
});