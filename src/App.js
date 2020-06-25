import React from 'react';
import Board from './component/Board';
import { Provider } from "react-redux";
import { store } from './store/index';
import Loading from './component/Loading';

function App() {


  return (
    <Provider store={store}>
      <Board></Board>
      <Loading></Loading>
    </Provider>
  );
}

export default App;
