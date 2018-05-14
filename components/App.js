import React from 'react';

import StockSubs from './StockSubs';
import StockQuery from './StockQuery';
import AddMutn from './AddMutn';

const App = () => (
  <React.Fragment>
    <StockQuery />
    <AddMutn />
    <StockSubs />
  </React.Fragment>
);

export default App;
