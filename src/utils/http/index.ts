import axios from 'axios';

export const api = axios.create({
  //baseURL: 'https://personal-blog-api-cxnr.onrender.com/',
  baseURL: 'http://localhost:4000/',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleServerError = (e: any) => {
  if (e.code === 'ERR_NETWORK') window.location.href = '/500';
  console.log(e);
};
