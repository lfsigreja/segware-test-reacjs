import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px #000;
  width: 80%;
  padding: 1rem;
  margin-bottom: 1rem;

  a {
    text-decoration: 0;
    color: #000;
    cursor: pointer;
    font-size: 2.5em;
    font-family: 'Bebas Neue', cursive;
    transition: all 0.3s ease-in-out;

    &:last-child {
      font-size: 1.5em;
      background-color: #000;
      color: #fff;
      padding: 0.3em;
      border-radius: 10px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
