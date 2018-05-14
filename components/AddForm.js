import React from 'react';
import PropTypes from 'prop-types';
import VirtualizedSelect from 'react-virtualized-select';

import symbolList from '../client/symbolList';

const propTypes = {
  mutateFunc: PropTypes.func.isRequired,
};

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { symbol: '' };
    this.updateValue = symbol => {
      this.setState({ symbol });
      this.props.mutateFunc({ variables: { symbol } });
    };
  }
  render() {
    return (
      <div className="form-group row d-flex align-items-center mt-2">
        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
        <label htmlFor="symbolSelect" className="col-sm-3 col-form-label">
          Select to Add a Stock:
        </label>
        <div className="col-sm-9">
          <VirtualizedSelect
            id="symbolSelect"
            options={symbolList}
            simpleValue
            clearable
            name="select-symbol"
            value={this.state.symbol}
            onChange={this.updateValue}
            searchable
            labelKey="s"
            valueKey="s"
          />
        </div>
      </div>
    );
  }
}

AddForm.propTypes = propTypes;

export default AddForm;

// <div className="section">
//   <h3 className="section-heading">Select a Stock Symbol:</h3>
//   <VirtualizedSelect
//     options={symbolList}
//     simpleValue
//     clearable
//     name="select-symbol"
//     value={this.state.symbol}
//     onChange={this.updateValue}
//     searchable
//     labelKey="s"
//     valueKey="s"
//   />
//   <div className="hint">
//     Reload the page if the stock-list did not update in response to
//     addition or removal of a stock.
//   </div>
// </div>
