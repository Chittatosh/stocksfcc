import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const LoadingAlert = ({ text }) => (
  <div className="alert alert-primary text-dark text-center" role="alert">
    {text}
  </div>
);

const ErrorAlert = ({ text }) => (
  <div className="alert alert-danger text-dark text-center" role="alert">
    {text}
  </div>
);

LoadingAlert.propTypes = propTypes;
ErrorAlert.propTypes = propTypes;

export { LoadingAlert, ErrorAlert };
