import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 100vh;
  .card {
    display: grid;
    background: #fff;
    max-width: 300px;
    border-radius: 12px;
    padding: 30px;
    a {
      text-decoration: none;
      text-align: center;
      color: #000;
      font-family: 'Roboto', sans-serif;
      margin: 10px 0;
      transition: all 0.6s;
      &:hover {
        transform: scale(1.03);
      }
    }
    h5 {
      font-family: 'Roboto', sans-serif;
      text-align: center;
      font-size: 22px;
      color: #000;
    }
    form {
      input {
        width: 100%;
        margin: 5px 0 0 0;
        height: 32px;
        border-radius: 5px;
        border: 1px solid #000;
        padding: 0 5px 0 5px;
      }
      input[type='submit'] {
        font-weight: 700;
        cursor: pointer;
        border: 1px solid #000;
        background: #000;
        padding: 5px;
        border-radius: 5px;
        transition: 0.6s;
        color: #fff;
        &:hover {
          background-color: #8080;
          color: #000;
        }
      }
    }
  }
`;
