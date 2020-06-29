import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Board() {

  const dispatch = useDispatch();
  const dataList = useSelector(state => state.dataReducer);
  const [levelText, setLevelText] = useState('');

  const setUserListfromStore = (state) => {
    return state.setUserListReducer;
  }
  const userListData = useSelector(setUserListfromStore);

  console.log("##########################", userListData);



  ///////////////////////////////////////////////////////////////////////////
  const setLevelListfromStore = (state) => {
    return state.setLevelListReducer;
  }
  const LevelListData = useSelector(setLevelListfromStore);
  console.log("**************************", LevelListData);;



  const [data, setdata] = useState(dataList);

  const onInsert = (e) => {
    dispatch({
      type: "INSERT_DATA",
      payload: {
        title: data.title,
        content: data.content
      }
    })
  }


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
              <select onChange={(e) => {
                // userListData===LevelListData 비교해서 데이터 return
                const value = e.currentTarget.value;
                if (value) {
                  const selectedLevel = userListData.find(user => user.key === value).level;
                  const levelText = LevelListData.find(level => level.level === selectedLevel).text;
                  setLevelText(levelText);
                } else {
                  setLevelText("");
                }
              }}>
                <option value="">유저를 선택해주세요</option>
                {userListData.map(user => <option value={user.key}>{user.name}</option>)}
              </select>
            </td>
            <td>
              {levelText}
            </td>
            <td><button onClick={onInsert}>추가</button></td>
          </tr>
        </tbody>
      </table >
    </div >
  );
}

export default Board;