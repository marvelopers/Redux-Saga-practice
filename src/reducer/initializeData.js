// import React, { useEffect, useState } from "react";
import { combineReducers } from "redux";

const loadStatus = {
  actSpinner: false
}

export const rootReducer = combineReducers({
  dataReducer,
  loadReducer,
  splitReducer
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

export function splitReducer(state = [], action) {
  switch (action.type) {
    case "ADD_LOW":
      return [...action.payload];
    default: return state;
  }
}