import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  color: #000;

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;

    textarea {
      width: 300px;
      height: 300px;
    }

    input {
      margin-top: 10px;
    }
  }
`;
