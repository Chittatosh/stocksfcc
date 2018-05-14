import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

import RemoveBtn from './RemoveBtn';
import { STOCK } from '../client/constants';

const propTypes = {
  symbol: PropTypes.string.isRequired,
};

const RemoveMutn = ({ symbol }) => (
  <Mutation
    mutation={gql`
      mutation {
        removeStock(symbol:"${symbol}") ${STOCK}
      }
    `}
  >
    {(mutateFunc, { loading, error }) => {
      if (loading) return <span>Deleting...</span>;
      if (error) return <p className="text-danger">{error.message}</p>;
      return <RemoveBtn {...{ symbol, mutateFunc }} />;
    }}
  </Mutation>
);

RemoveMutn.propTypes = propTypes;

export default RemoveMutn;
