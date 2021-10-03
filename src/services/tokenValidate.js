const token = () => {
  return sessionStorage.getItem('@segwareServiceToken').replaceAll('"', '');
};

export default token;
