import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerAction, actSpinner } from 'react-spinners';
import { createReducer } from '../reducer/initializeData';

export function Loading() {

  const dispatch = useDispatch();
  const getState = (state) => {
    console.log(">>>Loading.js_dispatch : getState");
    return state;
  };

  const storeData = useSelector(getState);
  //LOAD

  // const initialState = false;
  // const initState = () => initialState;

  // export const globalSpinnerState = createReducer(initState()).handleAction(actSpinner, (_, action) => action.payload);
  //////////////////////////

  useEffect(() => {
    const payload = {
      actSpinner: false
    }
    dispatch({ type: "LOADING", payload });
  });

  return (
    <div>LOADING</div>
  );
}

export default Loading;

