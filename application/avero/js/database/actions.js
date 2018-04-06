
import async from 'async';
import communication from './communication.js';

export const BASE_DATA_RECIEVED = 'BASE_DATA_RECIEVED';
export const RECEIVED_API_KEY = 'RECEIVED_API_KEY';
export const RECEIVED_CHECK_LIST = 'RECEIVED_CHECK_LIST';
export const RECEIVED_TABLE_LIST = 'RECEIVED_TABLE_LIST';

export const initApplication = ()=>((dispatch)=>{

  // request api
  communication.getApiKey(({data})=>{

    dispatch({ token: data, type: RECEIVED_API_KEY});

    dispatch((dispatch)=>{
      async.parallel([
        (callback)=>{
          communication.getTableList(({data})=>{
            dispatch({ tableList: data, type: RECEIVED_TABLE_LIST});
            callback(null);
          });
        },
        (callback)=>{
          communication.getCheckList(({data})=>{
            dispatch({ checkList: data, type: RECEIVED_CHECK_LIST});
            callback(null);
          });
        }
      ],
      // optional callback
      ()=>{
        dispatch({type: BASE_DATA_RECIEVED});
      });

    });
  });
});

export const NEW_CHECK = 'NEW_CHECK';
export const createNewCheck = (tableId)=>((dispatch)=>{
  communication.createNewCheck(tableId, ()=>{
    communication.getCheckList((data)=>{
      dispatch({ checkList: data, tableId, type: RECEIVED_CHECK_LIST});
    });
  });
});
