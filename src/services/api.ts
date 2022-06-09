import axios from 'axios'

const api = axios.create({
    baseURL: "https://valorant-api.com/v1",
    params: {
      language: 'pt-BR',
      isPlayableCharacter: true
    }
  });
  
  export default api;