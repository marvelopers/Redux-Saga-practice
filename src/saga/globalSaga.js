import { put, takeEvery, call, all, delay } from "redux-saga/effects";
import { api } from '../api/api';

//서버통신

//데이터 request
function* getDataRequestAction() {
  //loading
  yield takeEvery("GET_DATA_REQUEST", dataCombineActionSaga);
  // console.log("3. globalSaga.js/getDataRequestAction : 페이지 로드 후 SAGA ");
}



const combineData = (boardList, userList, levelList) => {
  // console.log("11. globalSaga.js/combineData : boardList, userList,levelList  ")
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
  // console.log("8. globalSaga.js : dataCombineActionSaga ")

  //Loading
  yield put({ type: "LOADING", payload: { actSpinner: true } });

  // yield delay(2000);

  //API data Call
  const boardList = yield call(api.getBoardList);
  const userList = yield call(api.getUserList);
  yield put({ type: "SET_USER_DATA", payload: userList });
  const levelList = yield call(api.getLevelList);
  yield put({ type: "SET_LEVEL_DATA", payload: levelList });

  const combinedData = combineData(boardList, userList, levelList);


  // console.log("12. globalSaga.js/dataCombineActionSaga || combineData")

  //conbine data
  yield put({ type: "DATA_COMBINE", payload: combinedData });

  //loading OFF
  yield put({ type: "LOADING", payload: { actSpinner: false } });

}
///////////////////////////////////////////////////////////////////


//데이터 set
function* insertDataRequestAction() {
  //INSERT_DATA
  yield takeEvery("INSERT_DATA", insertDataActionSaga);
}


function* insertDataActionSaga(action) {
  const res = yield call(api.createBoard, action.payload);
  // 통신 종료...

  yield put({ type: "GET_DATA_REQUEST" });

}


/////////////////////////update////////////////////////////////

//값 변경
function* updateDataRequestAction() {
  //getRowData
  yield takeEvery("UPDATE_DATA", updateDataActionSaga);
}

function* updateDataActionSaga(action) {
  console.log("ACTION", action);
  const res = yield call(api.updateBoard, action.payload);
  yield put({ type: "GET_DATA_REQUEST" });
}


/////////////////////////delelte////////////////////////////////

function* delRowDataRequestAction() {
  //getRowData
  yield takeEvery("DEL_ROW_DATA", delRowDataActionSaga);
}

function* delRowDataActionSaga(action) {
  const res = yield call(api.deleteBoard, action.payload);
  yield put({ type: "GET_DATA_REQUEST" });
  // 통신 종료...
}

export function* globalSaga() {
  yield all([
    // console.log("2. globalSaga.js : EXPORT globalSaga"),
    getDataRequestAction(),
    insertDataRequestAction(),
    delRowDataRequestAction(),
    updateDataRequestAction()
  ])
}