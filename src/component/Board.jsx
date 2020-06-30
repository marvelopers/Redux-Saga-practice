import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export function Board() {



  // console.log("4. Board.jsx : Board.jsx LOAD");

  const dispatch = useDispatch();
  const getBoardReducerFromStore = (state) => {
    // console.log("5. Board.js_dispatch : getState");
    return state.dataReducer;
  };
  const storeData = useSelector(getBoardReducerFromStore);

  console.log("6. Board.js_storeData : storeData", storeData);

  useEffect(() => {
    // console.log("7. Board.js_useEffect : useEffect");
    //  load action Call SAGA
    dispatch({ type: "GET_DATA_REQUEST" })
    // console.log("10. Board.js_useEffect_dispach : useEffect");

  }, []);



  //List Click

  const [selectedKey, setSelectedKey] = useState({
    key: '',
    title: '',
    contents: '',
    user_name: '',
    level_text: ''
  })

  //setSelectedIndex
  const listClick = (key) => {

    console.log()
    //키가 일치하는 값의 데이터를 불러온다. 
    // selectedKey(key);
    console.log("**************selectedKey(key)", key);

    // const RowInfo = storeData.find((key) => key === storeData.key)

    const payload = {
      key: "",
      title: "",
      contents: "",
      user: ""
    }

    dispatch({ type: 'GET_ROW_DATA', payload: payload })
  }


  const onClickDelete = (selectkey) => {
    console.log("BOARD");
    console.log(selectkey);
    dispatch({ type: 'DEL_ROW_DATA', payload: { key: selectkey } });
  }



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
          {storeData.map(d => {
            return (
              <tr key={d.key} onClick={() => {
                listClick(d.key);
              }}>
                <td>{d.title}</td>
                <td>{d.contents}</td>
                <td>{d.user_name}</td>
                <td>{d.level_text}</td>
                <td><button onClick={(e) => {
                  e.stopPropagation();
                  onClickDelete(d.key);
                }}>삭제</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Board;