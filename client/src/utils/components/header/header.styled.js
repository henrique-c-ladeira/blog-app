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


export const HeaderText = styled.h1`
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
`;

export const LoginText = styled.h1`
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  padding-bottom: 20px;
`;

export const ErrorText = styled.h1`
  text-align: center;
  color: red;
  font-family: 'Mulish', sans-serif;
  font-size: 12px;
`;

export const HeaderItem = styled.div`
  font-size: 22px;
  padding: 5px 8px;
  margin: 2px;
  &:hover {
    cursor: pointer;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`