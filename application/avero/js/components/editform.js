
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var EditForm = ({editId, tables})=>{
  return (
    <section className="edit-form">
      
      <div>{editId}</div>
      <div><SelectField
        style={{width: '100%'}}
        floatingLabelText="Table"
        value={tables[0].id}
      >
        {tables.map((table, index)=>{
          return (<MenuItem key={index} value={table.id} primaryText={'Table #' + table.number} />);
        })}
      </SelectField></div>
      <div><TextField style={{width: '100%'}} floatingLabelText="Floating Label Text" /></div>
      <div><RaisedButton style={{float: 'right'}} label="Save" /></div>

    </section>
  );
};

EditForm.propTypes = {
  editId: PropTypes.number.isRequired,
  tables: PropTypes.array.isRequired
};

module.exports = EditForm;
