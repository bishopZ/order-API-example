
import request from 'superagent';

import * as Manager from './dataManager.js';

const PATH_BASE = 'https://check-api.herokuapp.com/';
const STANDARD_DELAY = 1 * 1000; // 1 second

// helper method
const makeApiRequest = (method, path, data = null, callback)=>{
  const apiRequest = request[method](PATH_BASE + path);
  apiRequest.set('Authorization', Manager.apiToken());
  if (data !== null) {
    apiRequest.send(data);
  }
  apiRequest.end(callback);
};

// API communication interface
const communication = {

  getApiKey: (callback)=>{
    request.get('/api/token')
      .end((error, response)=>{
        setTimeout(()=>{
          callback({
            data: response.text
          });
        }, STANDARD_DELAY);
      });
  },

  getCheckList: (callback)=>{
    makeApiRequest('get', 'checks', null, (error, response)=>{
      setTimeout(()=>{
        callback({
          data: JSON.parse(response.text)
        });
      }, STANDARD_DELAY);
    });
  },

  getTableList: (callback)=>{
    makeApiRequest('get', 'tables', null, (error, response)=>{
      setTimeout(()=>{
        callback({
          data: JSON.parse(response.text)
        });
      }, STANDARD_DELAY);
    });
  },

  createNewCheck: (tableId, callback)=>{
    makeApiRequest('post', 'checks', {tableId}, ()=>{
      this.getCheckList(callback);
    });
  }

};

module.exports = communication;

