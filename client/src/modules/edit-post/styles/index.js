import styled from 'styled-components';
import { Button as MUButton, TextField as MUTextField } from '@material-ui/core'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(MUButton).attrs({
  variant: 'contained'
})``;

export const TitleField = styled(MUTextField).attrs({
  variant: 'outlined'
})``;

// export const MultilineTextField = styled(MUTextField).attrs({
//   variant: 'outlined',
//   multiline: true,
//   rows: 20,
//   fullWidth: true,
// })``;

export const MultilineTextField = styled.textarea.attrs({
  multiline: true,
})`
  width: 100%;
  padding: 15px;
  font-family: 'Mulish';
  font-size: 18px;
  margin: 20px;
  width: 85%;
  resize: none;
  border-radius: 10px;
`;