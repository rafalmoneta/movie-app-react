import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 2rem;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

`

const MoviesBox = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
 
export default MoviesBox;