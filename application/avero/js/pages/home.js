
import React from 'react';
import PropTypes from 'prop-types';

import ControlBar from '../components/controlbar.js';
import CheckList from '../components/checklist.js';
import EditForm from '../components/editform.js';

class HomePage extends React.Component {
  componentWillMount(){
    this.props.requestApiKey();
  }
  componentWillUpdate(){
    if (this.props.data.documentPhase === 1) {
      this.props.requestCheckList();
    }
  }
  render(){
    switch(this.props.data.documentPhase){
    case 0:
      return (<h1>Authorizing</h1>);
    case 1: 
      return (<h1>Getting Check List</h1>);
    case 2: 
      return (
        <div className="container">
          <ControlBar mode={this.props.data.viewMode} />
          <CheckList mode={this.props.data.viewMode} list={this.props.data.checkList} />
          <EditForm />
        </div>
      );
    }
  }
}

HomePage.propTypes = {
  requestApiKey: PropTypes.func.isRequired,
  requestCheckList: PropTypes.func.isRequired,
  data: PropTypes.shape({
    documentPhase: PropTypes.number.isRequired,
    checkList: PropTypes.array,
    viewMode: PropTypes.string.isRequired
  }).isRequired
};

module.exports = HomePage;
