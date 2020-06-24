import React from 'react';
import Board from './component/Board';
import { Provider } from "react-redux";
import { store } from './store/index';

function App() {


  return (
    <Provider store={store}>
      <Board></Board>
    </Provider>
  );
}

export default App;
