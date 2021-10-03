import { api } from './api';
import token from './tokenValidate';

const post = (content, { onSuccess, onError }) => {
  api
    .post('/feed', content, {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    })
    .then((response) => {
      onSuccess();
    })
    .catch((e) => {
      onError();
    });
};
export default post;
