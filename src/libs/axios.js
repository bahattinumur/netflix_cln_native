import axios from 'axios';
import {apiKey, token} from '../constants';

const baseURL = 'https://api.themoviedb.org/3';

export const axiosAgent = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
