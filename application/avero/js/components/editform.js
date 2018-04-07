
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

class EditForm extends React.Component {
  componentWillMount() {
    this.setState({
      selectedItem: this.props.itemList[0].id,
      voidable: []
    });
  }
  render() {
    var {editId, checkList, itemList, editItems} = this.props;

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
          <div>{(editCheck.tax) ? '$' + dollarFormat(editCheck.tax) : 'not calculated'}</div>
          <div>{(editCheck.tip) ? '$' + dollarFormat(editCheck.tip) : 'not calculated'}</div>
        </div>

        <div className="full">

          {editItems.length > 0 &&
            <div className="one-child">
              <Table 
                onRowSelection={(v)=>(this.handleRowSelection(v))} 
                multiSelectable={true}
              >
                <TableHeader
                  displaySelectAll={false}
                >
                  <TableRow>
                    <TableHeaderColumn>Price</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  deselectOnClickaway={false}
                >
                  {editItems.map((orderedItem, index)=>(
                    <TableRow key={index} selected={this.isSelected(index)} className={(orderedItem.voided) ? 'void': ''}>
                      <TableRowColumn>{'$' + dollarFormat(orderedItem.item.price)}</TableRowColumn>
                      <TableRowColumn>{orderedItem.item.name}</TableRowColumn>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            
              <div className="button-well">
                <RaisedButton label="Void Selected Items" onClick={()=>(this.voidItems())} />
              </div>
            </div>
          }

          <SelectField
            floatingLabelText="New Menu Item"
            value={this.state.selectedItem}
            onChange={(e,i,v)=>(this.onSelectItem(v))}
          >
            {itemList.map((item)=>(
              <MenuItem key={item.id} value={item.id} primaryText={item.name} />
            ))}
          </SelectField>

          <div className="button-well">
            <RaisedButton label="Add Item" onClick={()=>(this.addItem())} />
          </div>

          <div className="button-well">
            <RaisedButton label="Close Check" onClick={()=>(this.closeCheck())} />
          </div>

        </div>
      
      </section>
    );
  }
  onSelectItem(value) {
    this.setState({selectedItem: value});
  }
  addItem() {
    this.props.addItem(this.state.selectedItem, this.props.editId);
  }
  handleRowSelection(selectedRows) {
    const filteredRows = selectedRows.filter((rowIndex)=>(
      this.props.editItems[rowIndex].voided === false
    ));
    this.setState({voidable: filteredRows});
  }
  isSelected(index) {
    return this.state.voidable.indexOf(index) !== -1;
  }
  voidItems() {
    if (this.state.voidable.length) {
      const voidableItems = this.state.voidable.map((itemIndex)=>(this.props.editItems[itemIndex].id));
      this.props.voidItems(voidableItems, this.props.editId);
      this.setState({voidable:[]});
    }
  }
  closeCheck() {
    this.props.closeCheck(this.props.editId);
  }
}

EditForm.propTypes = {
  closeCheck: PropTypes.func.isRequired,
  voidItems: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  editId: PropTypes.string.isRequired,
  checkList: PropTypes.array.isRequired,
  itemList: PropTypes.array.isRequired,
  editItems: PropTypes.array.isRequired
};

module.exports = EditForm;
