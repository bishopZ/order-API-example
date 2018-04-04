
import React from 'react';
import PropTypes from 'prop-types';

var HomePage = ({requestApiKey}) => {
  requestApiKey();
  return (
    <div className="render-group">
      <h1>Home Page</h1>
    </div>
  );
};

HomePage.propTypes = {
  requestApiKey: PropTypes.func.isRequired
};

module.exports = HomePage;
