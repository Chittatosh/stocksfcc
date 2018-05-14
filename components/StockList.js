import React from 'react';
import PropTypes from 'prop-types';

import { STOCK_SUBSCRIPTION } from '../client/constants';
import { initChart } from '../client/utils';
import RemoveMutn from './RemoveMutn';

const propTypes = {
  subscribeToMore: PropTypes.func.isRequired,
  symbolList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

class StockList extends React.Component {
  componentDidMount() {
    const { symbolList, subscribeToMore } = this.props;
    initChart(symbolList);
    subscribeToMore({
      document: STOCK_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { node, previousValues } = subscriptionData.data.stockUpdates;
        const prevList = prev.stockList;
        return Object.assign({}, prev, {
          stockList: node
            ? [node, ...prevList]
            : prevList.filter(({ symbol }) => symbol !== previousValues.symbol),
        });
      },
    });
  }
  render() {
    return this.props.symbolList.map(symbol => (
      <RemoveMutn key={symbol} {...{ symbol }} />
    ));
  }
}

StockList.propTypes = propTypes;

export default StockList;
