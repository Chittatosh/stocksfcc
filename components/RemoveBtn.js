import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  symbol: PropTypes.string.isRequired,
  mutateFunc: PropTypes.func.isRequired,
};

class RemoveBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { remove: false, color: 'btn-primary' };
    this.toggleHover = () =>
      this.setState(({ remove }) => ({
        remove: !remove,
      }));
  }
  componentDidMount() {
    setTimeout(() => this.setState({ color: 'btn-outline-dark' }), 2000);
  }
  render() {
    const { symbol, mutateFunc } = this.props;
    const { remove, color } = this.state;
    return (
      <button
        type="button"
        className={`btn ${remove ? 'btn-danger' : color}`}
        onClick={mutateFunc}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {remove && 'Remove'} {symbol}
      </button>
    );
  }
}

RemoveBtn.propTypes = propTypes;

export default RemoveBtn;
