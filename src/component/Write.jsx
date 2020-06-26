import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export function Board() {

  const dispatch = useDispatch();
  const dataList = useSelector(state => state.dataReducer);

  const setUserListfromStore = (state) => {
    return state.setUserListReducer;
  }
  const userListData = useSelector(setUserListfromStore);

  console.log("##########################", userListData)


  ///////////////////////////////////////////////////////////////////////////
  const setLevelListfromStore = (state) => {
    return state.setLevelListReducer;
  }
  const LevelListData = useSelector(setLevelListfromStore);
  console.log("**************************", LevelListData);;

  //userListData===LevelListData 비교해서 데이터 return


  const [data, setdata] = useState(dataList);

  // useEffect(() =>
  //   console.log("7. Board.js_useEffect : useEffect");
  //   //  load action Call SAGA
  //   dispatch({ type: "GET_DATA_REQUEST" })
  //   console.log("10. Board.js_useEffect_dispach : useEffect");

  // }, []);


  const onInsert = (e) => {
    dispatch({
      type: "INSERT_DATA",
      payload: {
        title: data.title,
        content: data.content
      }
    })
  }
  //stored의 userList에서 
  //user_Level


  /////////////////////EventHanbler////////////////////////

  const hanbleChangeTitle = (e) => {
    setdata({
      ...data,
      title: e.target.value
    })
  }

  const hanbleChangeContent = (e) => {
    setdata({
      ...data,
      content: e.target.content
    })
  }

  const level_text = () => {

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
          <tr>
            <td>
              <input
                id="title"
                value={data.title}
                onChange={hanbleChangeTitle}
              ></input>
            </td>
            <td>
              <input
                id="contents"
                value={data.contents}
                onChange={hanbleChangeContent}
              ></input>
            </td>
            <td>
              <select option={() => userListData} ></select>
            </td>
            <td>
              <input
                value={level_text}
              ></input>
            </td>
            <td><button onClick={onInsert}>추가</button></td>
          </tr>
        </tbody>
      </table >
    </div >
  );
}

export default Board;