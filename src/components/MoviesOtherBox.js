import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(7, 12.5%);
  ${'' /* grid-template-rows: repeat(1, auto); */}
  justify-items: center;
  grid-column-gap: 2%;
  grid-row-gap: 2rem;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

`

const MoviesOtherBox = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
 
export default MoviesOtherBox;