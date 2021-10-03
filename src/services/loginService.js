import { api } from './api';
import saveToken from './storage';

const login = (data, { onError, onSuccess }) =>
  api
    .post('sign-in', data)
    .then((response) => {
      saveToken(response.data);
      onSuccess();
    })
    .catch(onError);

export default login;
