import React from 'react';
import styled from 'styled-components';

const Box = styled.main`
  display: block;
  background-color: #1F1B81;
  min-height: 100vh;
  padding: 2rem;
  color: white;
`

const Wrapper = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  );
}
 
export default Wrapper;