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
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto', arial;

  text-align: justify;

  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  margin-bottom: 4px;
  color: ${(props) => (props.error ? 'red' : '#000000')};
`;

export const Author = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  font-family: 'Roboto', arial;

  text-align: left;

  padding-bottom: 4px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.darkGray};
`;

export const DateText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  font-family: 'Roboto', arial;

  text-align: left;

  padding-bottom: 15px;

  color: ${(props) => props.theme.colors.lightGray};
`;

export const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  font-family: 'Roboto', arial;

  text-align: left;

  padding-bottom: 15px;

  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`;

export const Button = styled.button`
  border-width: 0px;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-top-left-radius: ${(props) => props.right === true? '0px' : '50%' };
  border-bottom-left-radius: ${(props) => props.right === true? '0px' : '50%' };
  border-top-right-radius: ${(props) => props.right === false ? '0px' : '50%' };
  border-bottom-right-radius: ${(props) => props.right === false? '0px' : '50%' };
  padding: 4px;
  font-size: 20px;
  width: 30px;
`;