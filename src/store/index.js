import createSagaMiddleware from 'redux-saga';
import { globalSaga } from '../saga/globalSaga';
import { rootReducer } from '../reducer/initializeData';
import { createStore, applyMiddleware } from 'redux';

export const getLaodStatusData = (state) => state.loadReducer;
export const getDataStatusData = (state) => state.dataReducer;
export const getRowData = (state) => state.getRowReducer;
export const getUserList = (state) => state.setUserListReducer;
export const getLevelList = (state) => state.setLevelListReducer;


console.log("--------------------getLaodStatusData", getDataStatusData);

const saggMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(saggMiddleWare));

saggMiddleWare.run(globalSaga);


//globalSaga put userList, levelList
