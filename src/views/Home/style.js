import styled from 'styled-components';

export const Container = styled.main`
  flex-grow: 1;
  color: #000;
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  font-family: 'Roboto', sans-serif;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  border-bottom: solid 1px #000;

  p {
    padding: 1em;
    font-size: 1.5em;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2em;

    h1 {
      font-size: 1em;
      font-weight: 900;
    }
  }
`;
