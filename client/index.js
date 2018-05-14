import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import App from '../components/App';

// Create an http link
const httpLink = new HttpLink({
  uri: '/graphql',
});
// Create a WebSocket link:
const loc = window.location;
const wsProt = loc.protocol === 'https:' ? 'wss:' : 'ws:';
const wsUri = `${wsProt}//${loc.host}/subscriptions`;
const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true,
  },
});
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const hotRender = () =>
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'),
  );

hotRender();

if (module.hot) {
  module.hot.accept('../components/App', hotRender);
}
