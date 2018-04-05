
import request from 'superagent';

import * as Manager from './dataManager.js';

const PATH_BASE = 'https://check-api.herokuapp.com/';

// helper method
const makeApiRequest = (method, path, callback, data = null)=>{
  const apiRequest = request[method](PATH_BASE + path);
  apiRequest.set('Authorization', Manager.apiToken());
  if (data !== null) {
    apiRequest.send(data);
  }
  apiRequest.end(callback);
};

// API communication interface
const communication = {

  getApiKey: (action, dispatch)=>{
    request.get('/api/token')
      .end((error, response)=>{
        dispatch({
          type: action,
          token: response.text
        });
      });
  },

  getCheckList: (action, dispatch)=>{
    makeApiRequest('get', 'checks', (error, response)=>{
      dispatch({
        type: action,
        text: response.text
      });
    });
  }

};

module.exports = communication;

