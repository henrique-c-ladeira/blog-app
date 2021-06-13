import React from 'react';
import styled from 'styled-components';
// import { Container } from './styles';

const component = () => (
    <Container>
      <Item>M</Item>  
      <Title>Blog Application</Title>
    </Container>
  )

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 35px;
  padding-left: 50px;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

const Item = styled.div``;

const Title = styled.div`
  font-size: 28px;
  font-family: 'Mulish', sans-serif;
  font-weight: 300; 
`;


export default component;