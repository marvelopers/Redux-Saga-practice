import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Board() {

  //  load action Call SAGA
  console.log("1. Board.jsx load");

  const dispatch = useDispatch;
  const getState = (state) => [state];
  const storeData = useSelector(getState);

  const Handler = () => {
    console.log('CALL_SAGA_GET_DATA');
    dispatch({
      type: "GET_DATA_REQUEST",
      payload: combinedData
    })
  }

  //saga에서 데이터를 다시 받는당당
  //data를 받아용!

  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>contents</th>
          <th>user_name</th>
          <th>level_text</th>
        </tr>
      </thead>
      <tbody>
        {storeData.map(d => {
          return (
            <tr>
              <td>{d.title}</td>
              <td>{d.contents}</td>
              <td>{d.user_name}</td>
              <td>{d.level_text}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Board;