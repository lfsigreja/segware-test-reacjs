import styled from 'styled-components';

export const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  background-color: #000;
  padding: 5rem 0 1rem;
  line-height: 1.5;

  h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5em;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1em;

    &:last-child {
      font-size: 0.7em;
    }
  }

  a {
    color: #fff;
    cursor: pointer;
  }

  ul {
    display: flex;
    li {
      &:last-child {
        margin-left: 1em;
      }
    }
  }
`;
