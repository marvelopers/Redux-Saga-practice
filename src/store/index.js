import createSagaMiddleware from 'redux-saga';
import { globalSaga } from '../saga/globalSaga';
import { rootReducer } from '../reducer/initializeData';
import { createStore, applyMiddleware, combineReducers } from 'redux';

export const getLaodStatusData = (state) => state.loadReducer;
export const getDataStatusData = (state) => state.dataReducer;

console.log("--------------------getLaodStatusData", getDataStatusData);

const saggMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(saggMiddleWare));

saggMiddleWare.run(globalSaga);

