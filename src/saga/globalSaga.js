//import { takeEvery } from 'redux-saga';
import { put, takeEvery, call, all } from "redux-saga/effects";
import { api } from '../api/api';

//API DATA 
function* apiCall(api) {
  const getBaordList = api.getBaordList;
}

//데이터 request
function* getDataRequestAction() {
  yield takeEvery("GET_DATA_REQUEST", dataCombineActionSaga);
}


// //데이터 get
// function* getDataAction() {
//   yield takeEvery("GET_DATA", getDataActionSaga);
// }


const combineData = (boardList, userList, levelList) => {
  console.log("userList", userList);
  console.log("boardList", boardList);
  console.log('==>', userList.find(user => user.key === boardList[0].user).name)

  return boardList.map(
    (board) => {
      // console.log("board.user", board.user);
      // console.log("=>", userList.find(user => user.key === board.user).name);
      return ({
        ...board,
        user_name: userList.find(user => user.key === board.user) ? userList.find(user => user.key === board.user).name : "알수없는유저",
        user_level: userList.find(user => user.key === board.user) ? userList.find(user => user.key === board.user).level : "알수없는레벨",
      }
      )
    }).map(result => ({
      ...result,
      level_text: levelList.find(level => level.level === result.user_level) ? levelList.find(level => level.level === result.user_level).text : "알수없는레벨텍스트"
    }));
}

function* dataCombineActionSaga() {
  console.log("saga_called");
  console.log('api.getBoardList', api.getBoardList);
  const boardList = yield call(api.getBoardList);

  const userList = yield call(api.getUserList);

  const levelList = yield call(api.getLevelList);


  const combinedData = combineData(boardList, userList, levelList);
  console.log("combineData", combinedData);

  yield put({ type: "DATA_COMBINE", payload: combinedData });
}

export function* globalSaga() {
  yield all([
    getDataRequestAction()
  ])
}