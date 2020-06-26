import React from 'react';
import Board from './component/Board';
import { Provider, useSelector } from "react-redux";
import { store } from './store/index';
import Loading from './component/Loading';
import Write from './component/Write';
import { getLaodStatusData } from './store/index';

function App() {

  const loadStatusData = useSelector(getLaodStatusData);

  return (
    <Provider store={store}>
      <Board></Board>
      <Write></Write>
      {loadStatusData.actSpinner && <Loading />}
    </Provider>
  );
}

export default App;
