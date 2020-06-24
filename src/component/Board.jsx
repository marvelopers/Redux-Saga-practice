import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Board() {

  //  load action Call SAGA
  console.log("");

  const dispatch = useDispatch();
  const getState = (state) => {
    return state;
  };
  const storeData = useSelector(getState);
  console.log('storeData', storeData);

  useEffect(() => {
    dispatch({ type: "GET_DATA_REQUEST" })
  }, []);

  //saga에서 데이터를 다시 받는당당
  //data를 받아용!

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