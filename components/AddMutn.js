import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import AddForm from './AddForm';
import { STOCK } from '../client/constants';
import { LoadingAlert, ErrorAlert } from './Alerts';

const AddMutn = () => (
  <Mutation
    mutation={gql`
      mutation addStock($symbol: String!) {
        addStock(symbol: $symbol) ${STOCK}
      }
    `}
  >
    {(mutateFunc, { loading, error }) => (
      <React.Fragment>
        {loading && <LoadingAlert text="Adding Stock..." />}
        {error && <ErrorAlert text={error.message} />}
        <AddForm {...{ mutateFunc }} />
      </React.Fragment>
    )}
  </Mutation>
);

export default AddMutn;
