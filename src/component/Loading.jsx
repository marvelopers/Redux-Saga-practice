import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerAction, actSpinner } from 'react-spinners';
import { createReducer } from '../reducer/initializeData';

export function Loading() {

  return (
    <div>LOADING</div>
  );
}

export default Loading;

