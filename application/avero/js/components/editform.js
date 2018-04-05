
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

var EditForm = ({editId})=>{
  return (
    <section className="edit-form">
      
      <p>{editId}</p>
      <RaisedButton label="Test" />


    </section>
  );
};

EditForm.propTypes = {
  editId: PropTypes.number.isRequired
};

module.exports = EditForm;
