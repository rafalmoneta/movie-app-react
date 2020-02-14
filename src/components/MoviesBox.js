import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: 100%;
  
  grid-template-columns: repeat(5, 18%);
  grid-template-rows: repeat(1, auto);
  grid-column-gap: 2.5%;
  grid-row-gap: 2rem;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(4,22%);
    grid-column-gap: 4%;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
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