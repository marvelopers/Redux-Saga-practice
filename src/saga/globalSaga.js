//import { takeEvery } from 'redux-saga';
import { put, takeEvery, call } from "redux-saga/effects";
import { bindActionCreators } from 'redux';
import { api } from '../api/api';


//데이터 request
function* getDataRequestAction() {
  yield takeEvery("GET_DATA_REQUEST", dataCombineActionSaga);
}

// //데이터 get
// function* getDataAction() {
//   yield takeEvery("GET_DATA", getDataActionSaga);
// }

const combineData = (boardList, userList, levelList) => {
  return boardList.map(
    (board) => ({
      ...board,
      user_name: userList.find(user => user.key === board.user).name,
      user_level: userList.find(user => user.key === board.user).level
    }
    )).map(result => ({
      ...result,
      level_text: levelList.find(level => level.level === result.user_level).text
    }));
}

function* dataCombineActionSaga() {

  const boardList = yield call(boardService);
  const userList = yield call(boardService);
  const levelList = yield call(boardService);

  const combinedData = combineData(boardList, userList, levelList);

  yield put({ type: "DATA_COMBINE", payload: combinedData });
}

export function* globalSaga() {
  yield all([
    getDataRequestAction()
  ])
}