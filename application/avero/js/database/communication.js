
import request from 'superagent';

import * as Manager from './dataManager.js';

// helper method
const pathBase = 'https://check-api.herokuapp.com';

const makeAPIRequest = (method, path, callback, data = null) => {
  const apiToken = Manager.apiToken();
  const apiRequest = request[method](pathBase + path);
  if (data !== null) {
    apiRequest.send(data);
  }
  apiRequest.set('Authorization', apiToken);
  apiRequest.end(callback);
};

// communication interface
const communication = {

  getApiKey: (action)=>{
    return (dispatch)=>{
      request
        .get('/api/token')
        .end((error, response) => {
          dispatch({
            type: action,
            token: response.text
          });
        });
    };
  },

  getCheckList: (action)=>{
    return (dispatch)=>{
      makeAPIRequest('get', '/checks', null, (response)=>{
        dispatch({
          type: action,
          text: response.text
        });
      });
    };
  }

};

module.exports = communication;

