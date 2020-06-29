import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Board() {

  const dispatch = useDispatch();
  const dataList = useSelector(state => state.dataReducer);

  const [levelText, setLevelText] = useState('');

  // const userDe = (state) => {
  //   return state.user
  // }

  // const userUser = useSelector(userDe);

  // const userDe = useSelector(state => state.user);
  // console.log("USER___", userUser);
  const [data, setData] = useState({
    title: '',
    contents: '',
    user: ''
  });



  const setUserListfromStore = (state) => {
    console.log("state", state);
    //dataReducer
    return state.setUserListReducer;
  }
  const userListData = useSelector(setUserListfromStore);

  console.log("##########################", userListData);



  ///////////////////////////////////////////////////////////////////////////
  const setLevelListfromStore = (state) => {
    return state.setLevelListReducer;
  }
  const LevelListData = useSelector(setLevelListfromStore);
  console.log("**************************", LevelListData);



  // const submit = () => {

  //   //db에 전송될 데이터
  //   const content = {
  //     ...payload,
  //     createAt : new Date(),
  //     updateAt : new Date()
  //   }

  //   //기존의 데이터와 새로운 데이터를 결합하는 방법
  //   const newContentsList = [...contentsList, payload];

  //   //Array를 String으로 변환해서 set
  //   localStorage.setItem('contentsList', JSON.stringify(newContentsList));
  //   setContentsList(newContentsList);

  // }


  /////////////////////EventHanbler////////////////////////

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

  const onInsert = () => {
    console.log('data', data);
    console.log("dataList", dataList);
    const payload = {
      key: "board" + Number(Math.max.apply(null, dataList.map(e => parseInt(e.key.split("board")[1], 10))) + 1),
      title: data.title,
      contents: data.contents,
      user: data.user,
    }
    console.log("PAYLOADPAYLOADPAYLOADPAYLOAD", Math.max.apply(null, dataList.map(e => e.key)) + 1);
    console.log(payload.key);
    dispatch({
      type: "INSERT_DATA",
      payload: payload
    })
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