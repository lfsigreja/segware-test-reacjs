import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: solid 1px #000;
  width: 80%;
  padding: 1rem;
  margin-bottom: 1rem;

  a {
    margin-left: 1em;
    text-decoration: 0;
    font-family: 'Bebas Neue', cursive;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    font-size: 1.5em;
    padding: 0.3em;
    transition: all 0.3s ease-in-out;

    &:first-child {
      margin-left: 0;
      background-color: #fff;
      color: #000;
      cursor: pointer;
      font-size: 2.5em;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
