import gql from 'graphql-tag';

export const STOCK = `{
  symbol
}`;

export const STOCKLIST_QUERY = gql`{
  stockList ${STOCK}
}`;

export const STOCK_SUBSCRIPTION = gql`
  subscription {
    stockUpdates {
      mutation
      node ${STOCK}
      previousValues ${STOCK}
    }
  }
`;
