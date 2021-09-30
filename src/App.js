import React from 'react';
import Routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/resetcss';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />;
      <Routes />;
    </>
  );
}

export default App;
