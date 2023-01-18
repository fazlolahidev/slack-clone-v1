import React from 'react'

//* MUI *// 
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

//* MUI Custom Button *// 
const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  backgroundColor: '#007A5A',
  borderColor: '#007A5A',
  
  '&:hover': {
    backgroundColor: '#003d2d',
    borderColor: '#003d2d',
  },

  '&:focus': {
    boxShadow: '0 0 0 0.2rem #99cabd',
  },
});

const LoginButton = (props) => {
  return (
    <BootstrapButton variant="contained" onClick={props.onClick}>
      {props.children}
    </BootstrapButton>
  )
}

export default LoginButton