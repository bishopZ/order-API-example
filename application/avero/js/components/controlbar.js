
import React from 'react';
import PropTypes from 'prop-types';

var ControlBar = ({})=>{
  return (
    <section className="control-bar">
      <p>Viewing: <strong>Open</strong> - <a href="#">Closed</a></p>
      <button>Create New</button>
    </section>
  );
};

ControlBar.propTypes = {};

module.exports = ControlBar;
