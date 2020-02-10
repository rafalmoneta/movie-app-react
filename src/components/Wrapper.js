import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: block;
  background-color: white;
  min-height: 100vh;
  padding: 2rem;
`

const Wrapper = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  );
}
 
export default Wrapper;