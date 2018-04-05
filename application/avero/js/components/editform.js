
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


var EditForm = ({editId})=>{
  return (
    <section className="edit-form">
      
      <div>{editId}</div>
      <div><SelectField
          style={{width: '100%'}} 
          floatingLabelText="Table"
          value={1}
        >
          <MenuItem value={1} primaryText="None" />
      </SelectField></div>
      <div><TextField style={{width: '100%'}} floatingLabelText="Floating Label Text" /></div>
      <div><RaisedButton style={{float: 'right'}} label="Save" /></div>

    </section>
  );
};

EditForm.propTypes = {
  editId: PropTypes.number.isRequired
};

module.exports = EditForm;
