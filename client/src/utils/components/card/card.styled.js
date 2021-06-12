import styled from 'styled-components';

export const Container = styled.div`
  height: 418px;
  width: 300px;

  justify-content: space-around;
  display: flex;
  flex-direction: column;

  padding: 26px;
  background: #ffffff;
  box-shadow: 5px 6px 7px 7px rgba(0, 0, 0, 0.25);
  border-radius: 0px 50px;
  margin: 48px auto;
`;

export const Text = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;

  text-align: center;
  color: #000000;
`;

export const BioText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  font-family: 'Press Start 2P', cursive;
  font-family: ${(props) => props.error || 'Roboto'};
  font-weight: thin;

  text-align: justify;

  color: ${(props) => (props.error ? 'red' : '#000000')};
`;

export const Avatar = styled.img`
  height: 8rem;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.15);
  width: 8rem;
  object-fit: contain;
  border-radius: 50%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
