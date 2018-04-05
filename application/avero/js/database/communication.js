
import request from 'superagent';

import * as Manager from './dataManager.js';

const PATH_BASE = 'https://check-api.herokuapp.com/';
const STANDARD_DELAY = 1 * 1000; // 1 second

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
        setTimeout(()=>{
          dispatch({
            type: action,
            token: response.text
          });
        }, STANDARD_DELAY);
      });
  },

  getCheckList: (action, dispatch)=>{
    makeApiRequest('get', 'checks', (error, response)=>{
      setTimeout(()=>{
        dispatch({
          type: action,
          checkList: JSON.parse(response.text)
        });
      }, STANDARD_DELAY);
    });
  },

  getTableList: (action, dispatch)=>{
    makeApiRequest('get', 'tables', (error, response)=>{
      setTimeout(()=>{
        dispatch({
          type: action,
          tableList: JSON.parse(response.text)
        });
      }, STANDARD_DELAY);
    });
  }

};

module.exports = communication;

