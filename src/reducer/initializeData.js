import React, { useEffect, useState } from "react";

//index.js
export default function dataReducer(state = [], action) {
  switch (action.type) {
    case "DATA_COMBINE":
      console.log("DATA_COMBINE_ACTION_CALLED")
      return [...action.payload];
    default: return state;
  }
}