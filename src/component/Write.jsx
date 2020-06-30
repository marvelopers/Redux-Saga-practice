import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRowData, getLevelList, getUserList } from "../store";



export function Board() {

  const dispatch = useDispatch();

  const dataList = useSelector(state => state.dataReducer);
  const userListData = useSelector(getUserList);
  const LevelListData = useSelector(getLevelList);
  const selectedKey = useSelector(getRowData);

  const updateKey = selectedKey.key;

  const [levelText, setLevelText] = useState('');
  const [data, setData] = useState({
    title: '',
    contents: '',
    user: ''
  });

  //console.log('updateKey====>', updateKey);
  useEffect(() => {
    console.log('updateKey==>', updateKey);
    if (updateKey) {
      console.log("=>", dataList.find((data) => data.key === updateKey));
      const existData = getSelectedBoard(updateKey);
      setData("existData", existData);
      const selectedLevel = userListData.find(user => user.key === existData.user).level;
      const levelText = LevelListData.find(level => level.level === selectedLevel).text;
      if (!levelText) {
        setLevelText("");
      } else {
        setLevelText(levelText);
      }
    }
  }, [updateKey]);

  function getSelectedBoard(updateKey) {

    const listKey = (data) => {
      return data.key === updateKey
    }
    const selectList = dataList.find(listKey);

    if (selectList) {
      return { title: selectList.title, contents: selectList.contents, user: selectList.user }
    } else {
      return { title: '', contents: '', user: '' }
    }


  }


  /////////////////////eventhandler////////////////////////


  const hanbleChangeTitle = (e) => {
    setData({
      ...data,
      title: e.target.value
    })
  }

  const hanbleChangeContent = (e) => {
    setData({
      ...data,
      contents: e.target.value
    })
  }

  const onInsert = ({ match }) => {
    if (match) {
      const payload = {
        key: match.params.key,
        title: data.title,
        contents: data.contents,
        user: data.user,
      }
      dispatch({
        type: "UPDATE_DATA",
        payload: payload
      })
    } else {
      const payload = {
        key: "board" + Number(Math.max.apply(null, dataList.map(e => parseInt(e.key.split("board")[1], 10))) + 1),
        title: data.title,
        contents: data.contents,
        user: data.user,
      }
      dispatch({
        type: "INSERT_DATA",
        payload: payload
      })

    }
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
              <select value={data.user} onChange={(e) => {

                // userListData===LevelListData 비교해서 데이터 return
                const value = e.currentTarget.value;

                if (value) {
                  const selectedLevel = userListData.find(user => user.key === value).level;
                  const levelText = LevelListData.find(level => level.level === selectedLevel).text;
                  setLevelText(levelText);
                  setData({
                    ...data,
                    user: value
                  });
                } else {
                  setLevelText("");
                  setData({
                    ...data,
                    user: ""
                  });
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