
import request from 'superagent';

import * as Manager from './dataManager.js';

const PATH_BASE = 'https://check-api.herokuapp.com/';

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
        callback({
          data: response.text
        });
      });
  },

  getCheckList: (callback)=>{
    makeApiRequest('get', 'checks', null, (error, response)=>{
      callback({
        data: JSON.parse(response.text)
      });
    });
  },

  getTableList: (callback)=>{
    makeApiRequest('get', 'tables', null, (error, response)=>{
      callback({
        data: JSON.parse(response.text)
      });
    });
  },

  getItemList: (callback)=>{
    makeApiRequest('get', 'items', null, (error, response)=>{
      callback({
        data: JSON.parse(response.text)
      });
    });
  },

  createNewCheck: (tableId, callback)=>{
    makeApiRequest('post', 'checks', {tableId}, ()=>{
      communication.getCheckList(callback);
    });
  },

  getCheckItems: (editId, callback)=>{
    makeApiRequest('get', 'checks/' + editId, null, (error, response)=>{
      callback({
        data: JSON.parse(response.text).orderedItems
      });
    });
  }

};

module.exports = communication;

