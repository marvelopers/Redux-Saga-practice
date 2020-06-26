//import { takeEvery } from 'redux-saga';
import { put, takeEvery, call, all, delay } from "redux-saga/effects";
// import { actSpinner } from "react-spinners";
import { api } from '../api/api';

//데이터 request
function* getDataRequestAction() {
  //loading
  // yield takeEvery("LOADING");
  yield takeEvery("GET_DATA_REQUEST", dataCombineActionSaga);
  console.log("3. globalSaga.js/getDataRequestAction : 페이지 로드 후 SAGA ");
}

const combineData = (boardList, userList, levelList) => {
  console.log("11. globalSaga.js/combineData : boardList, userList,levelList  ")
  return boardList.map(
    (board) => {
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
  console.log("8. globalSaga.js : dataCombineActionSaga ")

  ////////////////////////////////////////////////////////////////////////// 
  // yield put({ type: "LOADING", actSpinner: true });
  yield put({ type: "LOADING", payload: { actSpinner: true } });

  // yield put(actSpinner(true));

  yield delay(2000);
  console.log("delay");

  const boardList = yield call(api.getBoardList);
  console.log("boardList");
  const userList = yield call(api.getUserList);
  console.log("userList");
  const levelList = yield call(api.getLevelList);
  console.log("levelList");


  const combinedData = combineData(boardList, userList, levelList);


  console.log("12. globalSaga.js/dataCombineActionSaga || combineData")

  yield put({ type: "DATA_COMBINE", payload: combinedData });

  yield put({ type: "LOADING", payload: { actSpinner: false } });

  // yield put(actSpinner(false));
}


export function* globalSaga() {
  yield all([
    console.log("2. globalSaga.js : EXPORT globalSaga"),
    getDataRequestAction()
  ])
}