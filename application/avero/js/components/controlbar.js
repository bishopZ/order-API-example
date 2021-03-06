
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class ControlBar extends React.Component {
  componentWillMount() {
    this.setState({currentTable: this.props.tables[0].id});
  }
  render() {
    const {mode, tables, checkList} = this.props;
    
    const displayTables = tables.filter((table)=>{
      const openTable = checkList.filter((check)=>(check.closed === false && check.tableId === table.id));
      return openTable.length === 0;
    });

    var ViewStatus = (<p>
      Viewing:&nbsp;
      <strong>Open</strong>
      &nbsp;-&nbsp;
      <span onClick={()=>(this.updateViewMode())}>
        <a href="#">Closed</a>
      </span>
    </p>);
    if (mode !== 'open') {
      ViewStatus = (<p>
        Viewing:&nbsp;
        <span onClick={()=>(this.updateViewMode())}>
          <a href="#">Open</a>
        </span>
        &nbsp;-&nbsp;
        <strong>Closed</strong>
      </p>);
    }
    return (
      <section className="control-bar">
        {ViewStatus}
        <div><RaisedButton 
          style={{ marginTop: '2vw'}}
          label="Create New Check" 
          onClick={()=>(this.createNewCheck())}
        /></div>
        <div><SelectField
          floatingLabelText="Table"
          value={this.state.currentTable}
          onChange={(e,i,v)=>(this.updateTable(v))}
        >
          {displayTables.map((table, index)=>(
            <MenuItem key={index} value={table.id} primaryText={'Table #' + table.number} />
          ))}
        </SelectField></div>
      </section>
    );
  }
  updateTable(value) {
    this.setState({currentTable: value});
  }
  createNewCheck(){
    this.props.createNewCheck(this.state.currentTable);
  }
  updateViewMode(){
    this.props.updateViewMode((this.props.mode === 'open') ? 'closed' : 'open');
  }
}

ControlBar.propTypes = {
  updateViewMode: PropTypes.func.isRequired,
  createNewCheck: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  tables: PropTypes.array.isRequired,
  checkList: PropTypes.array.isRequired
};

module.exports = ControlBar;
