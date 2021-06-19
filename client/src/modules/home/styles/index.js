import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;

  max-width: 90%;
  padding: 10px 26px;
  background: #ffffff;
  margin: auto;
`;

export const PageContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Mulish', sans-serif;

  text-align: justify;

  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  margin-bottom: 4px;
  color: ${(props) => (props.error ? 'red' : '#000000')};
`;

export const Author = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  font-family: 'Mulish', sans-serif;

  text-align: left;

  padding-bottom: 4px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.darkGray};
`;

export const DateText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  font-family: 'Mulish', sans-serif;

  text-align: left;

  padding-bottom: 15px;

  color: ${(props) => props.theme.colors.lightGray};
`;

export const Content = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  font-family: 'Mulish', sans-serif;

  text-align: left;

  padding-bottom: 15px;

  width: 100%;
`;

export const ListTitle = styled.div`
  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  font-weight: 300;
  text-align: center;
  padding: 10px;
`;

export const WrapTitle = styled.div`
  position: relative;
`;
