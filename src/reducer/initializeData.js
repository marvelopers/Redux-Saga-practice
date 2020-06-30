// import React, { useEffect, useState } from "react";
import { combineReducers } from "redux";

const loadStatus = {
  actSpinner: false
}

export const rootReducer = combineReducers({
  dataReducer,
  loadReducer,
  setUserListReducer,
  setLevelListReducer,
  getRowReducer,
  setRowReducer
})

//index.js
export default function dataReducer(state = [], action) {
  switch (action.type) {
    case "DATA_COMBINE":
      console.log("13. initialize ----------DATA_COMBINE_ACTION_CALLED---------")
      return [...action.payload];
    default: return state;
  }
}


export function loadReducer(state = loadStatus, action) {
  switch (action.type) {
    case "LOADING":
      console.log("action.payload", action.payload);
      return { ...action.payload };
    default: return state;
  }
}

//globalSaga put userList, levelList

export function setUserListReducer(state = [], action) {
  switch (action.type) {
    case "SET_USER_DATA":
      return [...action.payload];
    default: return state;
  }
}

export function setLevelListReducer(state = [], action) {
  switch (action.type) {
    case "SET_LEVEL_DATA":
      return [...action.payload];
    default: return state;
  }
}

///////////////////////////////////////////////////////////////

//uopdate rowList 함수
//Click이 발생하면 데이터를 가져와서 write 칸에 뿌린다. 
export function getRowReducer(state = [], action) {
  switch (action.type) {
    case "GET_ROW_DATA":
      return { ...action.payload }
    default: return state;
  }
}

//추가를 누르면 업데이트 내역을 List에 보낸다. 
export function setRowReducer(state = [], action) {
  switch (action.type) {
    case "SET_ROW_DATA":
      return { ...action.payload }
    default: return state;
  }
}

