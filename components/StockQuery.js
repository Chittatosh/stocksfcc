import React from 'react';
import { Query } from 'react-apollo';

import StockList from './StockList';
import { LoadingAlert, ErrorAlert } from './Alerts';
import { STOCKLIST_QUERY } from '../client/constants';

const StockQuery = () => (
  <Query query={STOCKLIST_QUERY}>
    {({ subscribeToMore, loading, error, data }) => {
      if (loading) return <LoadingAlert text="Fetching Stock List..." />;
      if (error) return <ErrorAlert text={error.message} />;
      const symbolList = data.stockList.map(({ symbol }) => symbol);
      return (
        <React.Fragment>
          Click to remove a Stock:{' '}
          <StockList {...{ subscribeToMore, symbolList }} />
        </React.Fragment>
      );
    }}
  </Query>
);

export default StockQuery;
