import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Board() {


  console.log("4. Board.jsx : Board.jsx LOAD");

  const dispatch = useDispatch(console.log("USE_DISPATCH"));
  const getState = (state) => {
    console.log("5. Board.js_dispatch : getState");
    return state;
  };
  const storeData = useSelector(getState);


  console.log("6. Board.js_storeData : storeData");

  useEffect(() => {
    console.log("7. Board.js_useEffect : useEffect");
    //  load action Call SAGA
    dispatch({ type: "GET_DATA_REQUEST" })
    console.log("10. Board.js_useEffect_dispach : useEffect");

  }, []);

  if (!storeData) {
    return <div>LOADING</div>
  }

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
          {/* {!storeData &&
            <div>LOADING</div>
          } */}
          {storeData.map(d => {
            return (
              <tr key={d.title}>
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