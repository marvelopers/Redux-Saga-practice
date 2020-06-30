import axios from 'axios';

const API_HOST = "http://localhost:8000";
// console.log("1. api.js : API CALL API_____________API_____________API_____________API-------")

const instance = axios.create({
  timeout: 3000
});

const headerGenerator = (Authotization) => {
  let header = {
    'Contents-Type': 'Application/json'
  }

  if (Authotization) {
    header['Authorization'] = Authotization;
  }

  // console.log("9. api : API");
  return { "headers": header };
}

export const api = {
  getBoardList: async () => {
    const response = await instance.get(`${API_HOST}/boards`, headerGenerator());
    return response.data;
  },
  getUserList: async () => {
    const response = await instance.get(`${API_HOST}/users`, headerGenerator("LOGGED_IN"));
    return response.data.results;
  },
  getLevelList: async () => {
    // console.log("11. API----------API-----------API");
    const response = await instance.get(`${API_HOST}/levels`, headerGenerator());
    return response.data.results;
  },
  createBoard: async (body) => {
    return instance.post(`${API_HOST}/boards`, body);
  },
  updateBoard: async (body) => {
    return instance.post(`${API_HOST}/boards`, body);
  },
  deleteBoard: async (body) => {
    return instance.post(`${API_HOST}/boards`, body);
  }

}

