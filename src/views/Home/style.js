import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  color: #000;
`;

export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  font-family: 'Roboto', sans-serif;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;

  h1 {
    font-size: 1.5em;
    text-align: center;
    font-weight: 900;
  }

  p {
    padding: 1em;
    font-size: 1em;
  }
`;
