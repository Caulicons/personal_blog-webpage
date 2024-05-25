import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://personal-blog-api-cxnr.onrender.com/',
  // baseURL: 'http://localhost:4000/',
});
