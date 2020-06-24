import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Board() {

  //  load action Call SAGA
  console.log("1. Board.jsx LOAD");

  const dispatch = useDispatch();
  const getState = (state) => {
    console.log("2.getState");
    return state;
  };
  const storeData = useSelector(getState);
  console.log("3.storeData");

  useEffect(() => {
    console.log("4");

    dispatch({ type: "GET_DATA_REQUEST" })
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default Board;