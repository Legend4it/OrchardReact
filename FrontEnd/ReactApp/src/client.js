import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://localhost:5001/api/graphql', // Replace with your Orchard Core GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
