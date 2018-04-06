
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
          />
          <CheckList 
            mode={this.props.data.viewMode} 
            list={this.props.data.checkList} 
          />
          <EditForm 
            editId={this.props.data.editId} 
            tables={this.props.data.tableList}
          />
        </div>
      );
    }
  }
}

HomePage.propTypes = {
  initApplication: PropTypes.func.isRequired,
  createNewCheck: PropTypes.func.isRequired,
  data: PropTypes.shape({
    documentPhase: PropTypes.number.isRequired,
    tableList: PropTypes.array,
    checkList: PropTypes.array,
    viewMode: PropTypes.string.isRequired,
    editId: PropTypes.number
  }).isRequired
};

module.exports = HomePage;
