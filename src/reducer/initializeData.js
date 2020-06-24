import React, { useEffect, useState } from "react";

//index.js
export default function dataReducer(state = [], action) {
  switch (action.type) {
    case "GET_DATA":
      console.log("return getData");
      const boardList = api.getBaordList();
      const userList = api.getUserList();
      const levelList = api.getLevelList();
      return { boardList, userList, levelList };

    case "DATA_COMBINE":

      return {}
  }
}