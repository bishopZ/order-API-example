
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var ControlBar = ({mode})=>{
  var ViewStatus = <p>Viewing: <strong>Open</strong> - <a href="#">Closed</a></p>;
  if (mode !== 'open') {
    ViewStatus = <p>Viewing: <a href="#">Open</a> - <strong>Closed</strong></p>;
  }
  return (
    <section className="control-bar">
      {ViewStatus}
      <div><RaisedButton 
        style={{ marginTop: '2vw'}}
        label="Create New Check" 
      /></div>
      <div><SelectField
          floatingLabelText="Table"
          value={1}
        >
          <MenuItem value={1} primaryText="None" />
      </SelectField></div>
    </section>
  );
};

ControlBar.propTypes = {
  mode: PropTypes.string.isRequired
};

module.exports = ControlBar;
