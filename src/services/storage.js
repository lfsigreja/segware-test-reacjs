const saveToken = (token) => {
  sessionStorage.setItem('@segwareServiceToken', JSON.stringify(token));
};

export default saveToken;
