
import React from 'react';
import PropTypes from 'prop-types';

import ControlBar from '../components/controlbar.js';
import CheckList from '../components/checklist.js';
import EditForm from '../components/editform.js';

class HomePage extends React.Component {
  render(){
    switch(this.props.data.documentPhase){
    case 0: 
      this.props.requestApiKey(); 
      return (<h1>Authorizing</h1>);
    case 1: 
      this.props.requestCheckList(); 
      return (<h1>Getting Check List</h1>);
    case 2: 
      return (
        <div className="container">
          <ControlBar />
          <CheckList />
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
    documentPhase: PropTypes.number.isRequired
  }).isRequired
};

module.exports = HomePage;
