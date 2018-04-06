
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

var EditForm = ({editId, checkList, itemList})=>{
  if (editId === '') return (<p></p>);

  const editCheck = checkList.find((check)=>(check.id === editId));

  return (
    <section className="edit-form">
      <div className="left">
        <div>Check ID</div>
        <div>Table </div>
        <div>Tax</div>
        <div>Tip</div>
      </div>
      <div className="right">
        <div>{editId}</div>
        <div>#{editCheck.table.number}</div>
        <div>{editCheck.tax || 'not calculated'}</div>
        <div>{editCheck.tip || 'not calculated'}</div>
      </div>

      <div className="full">

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

        <div className="button-well">
          <RaisedButton label="Void Selected Items" />
        </div>

        <SelectField
          floatingLabelText="New Menu Item"
          value={itemList[0].id}
          onChange={()=>( 0 )}
        >
          {itemList.map((item)=>(
            <MenuItem key={item.id} value={item.id} primaryText={item.name} />
          ))}
        </SelectField>

        <div className="button-well">
          <RaisedButton label="Add Item" />
        </div>

        <div className="button-well">
          <RaisedButton label="Close Check" />
        </div>

      </div>
    
    </section>
  );
};

EditForm.propTypes = {
  editId: PropTypes.string.isRequired,
  checkList: PropTypes.array.isRequired,
  itemList: PropTypes.array.isRequired
};

module.exports = EditForm;
