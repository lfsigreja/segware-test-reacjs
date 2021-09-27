import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: 0;
    color: #000;
    cursor: pointer;
    font-size: 2.5em;
    font-family: 'Bebas Neue', cursive;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
