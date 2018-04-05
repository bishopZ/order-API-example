
import React from 'react';
import PropTypes from 'prop-types';

var ControlBar = ({mode})=>{
  var ViewStatus = <p>Viewing: <strong>Open</strong> - <a href="#">Closed</a></p>;
  if (mode !== 'open') {
    ViewStatus = <p>Viewing: <a href="#">Open</a> - <strong>Closed</strong></p>;
  }
  return (
    <section className="control-bar">
      {ViewStatus}
      <button>Create New</button>
    </section>
  );
};

ControlBar.propTypes = {
  mode: PropTypes.string.isRequired
};

module.exports = ControlBar;
