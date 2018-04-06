
import React from 'react';
import PropTypes from 'prop-types';

import ControlBar from '../components/controlbar.js';
import CheckList from '../components/checklist.js';
import EditForm from '../components/editform.js';

class HomePage extends React.Component {
  componentWillMount(){
    this.props.initApplication();
  }
  render(){
    switch(this.props.data.documentPhase){
    case 0:
      return (<h1>Loading Data</h1>);
    case 1: 
      return (
        <div className="container">
          <ControlBar 
            mode={this.props.data.viewMode}
            tables={this.props.data.tableList}
            createNewCheck={this.props.createNewCheck}
            updateViewMode={this.props.updateViewMode}
          />
          <CheckList 
            mode={this.props.data.viewMode} 
            list={this.props.data.checkList}
            editCheck={this.props.editCheck}
          />
          <EditForm 
            editId={this.props.data.editId}
            checkList={this.props.data.checkList}
            itemList={this.props.data.itemList}
            editItems={this.props.data.editItems}
          />
        </div>
      );
    }
  }
}

HomePage.propTypes = {
  initApplication: PropTypes.func.isRequired,
  createNewCheck: PropTypes.func.isRequired,
  updateViewMode: PropTypes.func.isRequired,
  editCheck: PropTypes.func.isRequired,
  data: PropTypes.shape({
    documentPhase: PropTypes.number.isRequired,
    tableList: PropTypes.array,
    checkList: PropTypes.array,
    itemList: PropTypes.array,
    editItems: PropTypes.array,
    viewMode: PropTypes.string.isRequired,
    editId: PropTypes.string
  }).isRequired
};

module.exports = HomePage;
