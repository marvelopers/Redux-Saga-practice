import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Board() {

  //  load action Call SAGA
  console.log("4. Board.jsx : Board.jsx LOAD");

  const dispatch = useDispatch();
  const getState = (state) => {
    console.log("5. Board.js_dispatch : getState");
    return state;
  };
  const storeData = useSelector(getState);
  console.log("6. Board.js_storeData : storeData");

  useEffect(() => {
    console.log("7. Board.js_useEffect : useEffect");

    dispatch({ type: "GET_DATA_REQUEST" })
    console.log("10. Board.js_useEffect_dispach : useEffect");

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