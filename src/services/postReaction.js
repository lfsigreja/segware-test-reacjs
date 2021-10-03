import { api } from './api';
import token from './tokenValidate';
import getContent from './getContent';

const postReaction = (favorite, { onSuccess }) => {
  api
    .post('/reaction', favorite, {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    })
    .then(() => getContent(onSuccess));
};

export default postReaction;
