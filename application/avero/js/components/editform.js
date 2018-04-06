
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

var EditForm = ({editId, checkList})=>{
  if (editId === '') return (<p></p>);

  const editCheck = checkList.find((check)=>(check.id === editId));

  return (
    <section className="edit-form">
      
      <div>Check ID: {editId}</div>
      <div>Table #{editCheck.table.number}</div>
      
      <div>Tax: {editCheck.tax || 'not calculated'}</div>
      <div>Tip: {editCheck.tip || 'not calculated'}</div>

      <div>Menu Items</div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>Corn Soup</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

      <div><SelectField
        floatingLabelText="New Menu Item"
        value={0}
        onChange={()=>( 0 )}
      >
        <MenuItem value={0} primaryText="None" />
      </SelectField></div>

      <div>
        <RaisedButton style={{float: 'right'}} label="Close Check" />
        <RaisedButton style={{float: 'right'}} label="Add Item" />
      </div>

    </section>
  );
};

EditForm.propTypes = {
  editId: PropTypes.string.isRequired,
  checkList: PropTypes.array.isRequired
};

module.exports = EditForm;
