import createSagaMiddleware from 'redux-saga';
import { globalSaga } from '../saga/globalSaga';
import { rootReducer } from '../reducer/initializeData';
import { createStore, applyMiddleware } from 'redux';

export const getLaodStatusData = (state) => state.loadReducer;

const saggMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(saggMiddleWare));

saggMiddleWare.run(globalSaga);

