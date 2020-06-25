import axios from 'axios';

const API_HOST = "http://localhost:8000";
console.log("1. API CALL API_____________API_____________API_____________API-------")

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

  console.log("API");
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
    console.log("API----------API-----------API");
    const response = await instance.get(`${API_HOST}/levels`, headerGenerator());
    return response.data.results;
  }

}

