import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://public.herotofu.com/v1/'
});

export default instance;
