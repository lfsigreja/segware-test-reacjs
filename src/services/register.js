import { api } from './api';
import login from './loginService';

const register = (data, { onError, onSuccess }) =>
  api
    .post('/sign-up', data)
    .then(login(data, { onError, onSuccess }))
    .catch(onError);

export default register;
