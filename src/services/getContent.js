import token from './tokenValidate';
import { api } from './api';

const getContent = (setData) => {
  return api
    .get('/feeds', {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    })
    .then((response) => {
      setData(response.data);
    });
};

export default getContent;
