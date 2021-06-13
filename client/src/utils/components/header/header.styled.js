import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  height: 3%;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

export const Status = styled.h1`
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
`;

export const HeaderItem = styled.div`
  font-size: 22px;
  padding: 5px 8px;
  margin: 2px;
  &:hover {
    cursor: pointer;
  }
`