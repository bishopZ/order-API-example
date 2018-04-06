
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class ControlBar extends React.Component {
  componentWillMount() {
    this.updateTable = this.updateTable.bind(this);
    this.createNewCheck = this.createNewCheck.bind(this);
    this.updateViewMode = this.updateViewMode.bind(this);
    this.setState({currentTable: this.props.tables[0].id});
  }
  render() {
    const {mode, tables} = this.props;
    
    var ViewStatus = <p>Viewing: <strong>Open</strong> - <span onClick={this.updateViewMode}><a href="#">Closed</a></span></p>;
    if (mode !== 'open') {
      ViewStatus = <p>Viewing: <span onClick={this.updateViewMode}><a href="#">Open</a></span> - <strong>Closed</strong></p>;
    }
    return (
      <section className="control-bar">
        {ViewStatus}
        <div><RaisedButton 
          style={{ marginTop: '2vw'}}
          label="Create New Check" 
          onClick={this.createNewCheck}
        /></div>
        <div><SelectField
          floatingLabelText="Table"
          value={this.state.currentTable}
          onChange={this.updateTable}
        >
          {tables.map((table, index)=>{
            return (<MenuItem key={index} value={table.id} primaryText={'Table #' + table.number} />);
          })}
        </SelectField></div>
      </section>
    );
  }
  updateTable(event, index, value) {
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
  tables: PropTypes.array.isRequired
};

module.exports = ControlBar;
