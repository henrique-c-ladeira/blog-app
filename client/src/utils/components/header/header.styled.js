import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${(props) => props.theme.colors.lightBlue};
  display: flex;
  height: 92px;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 25px 25px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 18px;
`;
