import React from 'react';
import { Subscription } from 'react-apollo';

import LastActivity from './LastActivity';
import { STOCK_SUBSCRIPTION } from '../client/constants';
import { ErrorAlert } from './Alerts';

const StockSubs = () => (
  <Subscription subscription={STOCK_SUBSCRIPTION}>
    {({ loading, error, data }) => {
      if (loading) return <LastActivity mutation="" symbol="" />;
      if (error) return <ErrorAlert text={error.message} />;
      const { mutation, node, previousValues } = data.stockUpdates;
      const { symbol } = node || previousValues;
      return <LastActivity {...{ mutation, symbol }} />;
    }}
  </Subscription>
);

export default StockSubs;
