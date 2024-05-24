import axios from 'axios';

const api = axios.create({
  baseURL: 'https://personal-blog-api-cxnr.onrender.com/',
});

export { api };
