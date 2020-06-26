// import React, { useEffect, useState } from "react";

const loadStatus = {
  actSpinner: false
}

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
      return { ...action.payload };
    default: return state;
  }
}