
import async from 'async';
import communication from './communication.js';

export const BASE_DATA_RECIEVED = 'BASE_DATA_RECIEVED';
export const RECEIVED_API_KEY = 'RECEIVED_API_KEY';
export const RECEIVED_CHECK_LIST = 'RECEIVED_CHECK_LIST';
export const RECEIVED_TABLE_LIST = 'RECEIVED_TABLE_LIST';
export const RECEIVED_ITEM_LIST = 'RECEIVED_ITEM_LIST';

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
        },
        (callback)=>{
          communication.getItemList(({data})=>{
            dispatch({ itemList: data, type: RECEIVED_ITEM_LIST});
            callback(null);
          });
        }
      ],
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

export const UPDATE_VIEW_MODE = 'UPDATE_VIEW_MODE';
export const updateViewMode = (newMode)=>({
  type: UPDATE_VIEW_MODE,
  mode: newMode
});

export const EDIT_CHECK = 'EDIT_CHECK';
export const editCheck = (editId)=>({
  type: EDIT_CHECK,
  editId
});
