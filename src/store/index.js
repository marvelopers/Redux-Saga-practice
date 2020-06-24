import createSagaMiddleware from 'redux-saga';
import { globalSaga } from '../saga/globalSaga';
import data from '../reducer/initializeData';
import { createStore, applyMiddleware } from 'redux';

const saggMiddleWare = createSagaMiddleware();

export const store = createStore(data, applyMiddleware(saggMiddleWare));

saggMiddleWare.run(globalSaga);

