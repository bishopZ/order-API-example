
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var ControlBar = ({mode, tables})=>{
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
        value={tables[0].id}
      >
        { tables.map((table, index)=>{
          return (<MenuItem key={index} value={table.id} primaryText={'Table #' + table.number} />);
        })}
      </SelectField></div>
    </section>
  );
};

ControlBar.propTypes = {
  mode: PropTypes.string.isRequired,
  tables: PropTypes.array.isRequired
};

module.exports = ControlBar;
