import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Loading() {

  const dispatch = useDispatch();
  const getState = (state) => {
    console.log("5. Board.js_dispatch : getState");
    return state;
  };

  const storeData = useSelector(getState);

  useEffect(() => {
    //  load action Call SAGA
    dispatch({ type: "GET_DATA_REQUEST" })
  }, []);

  return (
    <div>Loading</div>
  );
}

//액션, 리듀서

export default Loading;

