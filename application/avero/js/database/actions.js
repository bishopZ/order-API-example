
import async from 'async';
import communication from './communication.js';

export const BASE_DATA_RECIEVED = 'BASE_DATA_RECIEVED';
export const RECEIVED_API_KEY = 'RECEIVED_API_KEY';
export const RECEIVED_CHECK_LIST = 'RECEIVED_CHECK_LIST';
export const RECEIVED_TABLE_LIST = 'RECEIVED_TABLE_LIST';
export const RECEIVED_ITEM_LIST = 'RECEIVED_ITEM_LIST';

export const initApplication = ()=>((dispatch)=>{

  communication.getApiKey(({data})=>{

    dispatch({ token: data, type: RECEIVED_API_KEY });

    dispatch((dispatch)=>{
      async.parallel([
        (callback)=>{
          communication.getTableList(({data})=>{
            dispatch({ tableList: data, type: RECEIVED_TABLE_LIST });
            callback(null);
          });
        },
        (callback)=>{
          communication.getCheckList(({data})=>{
            dispatch({ checkList: data, type: RECEIVED_CHECK_LIST });
            callback(null);
          });
        },
        (callback)=>{
          communication.getItemList(({data})=>{
            dispatch({ itemList: data, type: RECEIVED_ITEM_LIST });
            callback(null);
          });
        }
      ],
      ()=>{
        dispatch({type: BASE_DATA_RECIEVED });
      });

    });
  });
});

export const NEW_CHECK = 'NEW_CHECK';
export const createNewCheck = (tableId)=>((dispatch)=>{
  communication.createNewCheck(tableId, ()=>{
    communication.getCheckList(({data})=>{
      dispatch({ checkList: data, tableId, type: RECEIVED_CHECK_LIST });
    });
  });
});

export const UPDATE_VIEW_MODE = 'UPDATE_VIEW_MODE';
export const updateViewMode = (newMode)=>({
  type: UPDATE_VIEW_MODE,
  mode: newMode
});

export const EDIT_CHECK = 'EDIT_CHECK';
export const editCheck = (editId)=>((dispatch)=>{
  communication.getCheckItems(editId, ({data})=>{
    dispatch({
      type: EDIT_CHECK,
      editId,
      editItems: data
    });
  });
});

export const addItem = (selectedItemId, editId)=>((dispatch)=>{
  communication.addMenuItem(selectedItemId, editId, ()=>{
    dispatch(editCheck(editId));
  });
});

export const voidItems = (itemIds, editId)=>((dispatch)=>{
  communication.voidMenuItems(itemIds, editId, ()=>{
    dispatch(editCheck(editId));
  });
});

export const closeCheck = (editId)=>((dispatch)=>{
  communication.closeCheck(editId, ()=>{
    communication.getCheckList(({data})=>{
      dispatch({ checkList: data, type: RECEIVED_CHECK_LIST });
      dispatch((dispatch)=>{ // _.defer
        dispatch({ type: BASE_DATA_RECIEVED });
      });
    });
  });
});
