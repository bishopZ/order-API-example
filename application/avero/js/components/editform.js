
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { 
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';

// helper function
const dollarFormat = (price)=>(price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));

var EditForm = ({editId, checkList, itemList, editItems})=>{
  if (editId === '') return (<p></p>);

  const editCheck = checkList.find((check)=>(check.id === editId));

  editItems = editItems.map((orderedItem)=>{
    const itemDetails = itemList.find((item)=>(item.id === orderedItem.itemId));
    orderedItem.item = itemDetails;
    return orderedItem;
  });

  return (
    <section className="edit-form">

      <div className="left">
        <div>Table </div>
        <div>Check ID</div>
        <div>Tax</div>
        <div>Tip</div>
      </div>
      <div className="right">
        <div>#{editCheck.table.number}</div>
        <div>{editId}</div>
        <div>{editCheck.tax || 'not calculated'}</div>
        <div>{editCheck.tip || 'not calculated'}</div>
      </div>

      <div className="full">

        {editItems.length > 0 &&
          <div className="one-child">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Price</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              {editItems.map((orderedItem, index)=>(
                <TableBody key={index}>
                  <TableRow>
                    <TableRowColumn>{dollarFormat(orderedItem.item.price)}</TableRowColumn>
                    <TableRowColumn>{orderedItem.item.name}</TableRowColumn>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          
            <div className="button-well">
              <RaisedButton label="Void Selected Items" />
            </div>
          </div>
        }

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
  itemList: PropTypes.array.isRequired,
  editItems: PropTypes.array.isRequired
};

module.exports = EditForm;
