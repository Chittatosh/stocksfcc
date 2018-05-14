import React from 'react';
import PropTypes from 'prop-types';

import { addToChart, removeFromChart } from '../client/utils';

const propTypes = {
  mutation: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

class LastActivity extends React.Component {
  componentDidUpdate() {
    console.log(this.props);
    const { mutation, symbol } = this.props;
    if (mutation === 'CREATED') addToChart(symbol);
    if (mutation === 'DELETED') removeFromChart(symbol);
  }
  render() {
    const { mutation, symbol } = this.props;
    return (
      <p>
        Last Activity: {mutation} {symbol} {!mutation && 'Chart Initialized'}
      </p>
    );
  }
}

LastActivity.propTypes = propTypes;

export default LastActivity;
// <React.Fragment>
//   <p>
//     Note: Reload the page if the stock-list did not update in response to
//     addition or removal of a stock.
//   </p>
// </React.Fragment>
