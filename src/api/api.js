import axios from 'axios';

const API_HOST = "http://localhost:8000";

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
  getBaordList: async () => {
    const response = await instance.get(`${API_HOST}/boards`, headerGenerator());
    return response.data.results;
  },
  getuserList: async () => {
    const response = await instance.get(`${API_HOST}/users`, headerGenerator("LOGGED_IN"));
    return response.data.results;
  },
  getLevelList: async () => {
    const response = await instance.get(`${API_HOST}/levels`, headerGenerator());
    return response.data.results;
  },


}

