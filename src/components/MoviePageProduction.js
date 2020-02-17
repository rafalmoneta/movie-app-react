import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  margin: 5rem 2rem;
  @media (max-width: 500px) {
    margin: 0;
  }
`

const ProductionInfo = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
  }
`

const ImageCircle = styled.img`
  display: block;
  width: 250px;
`

const MoviePageProduction = ({production}) => {
  return (
    <Container>
      {production.map((company) => {
        if(company.logo_path) {
          return (
            <ProductionInfo>
              <h3>{company.name}</h3>
              <ImageCircle src={`http://image.tmdb.org/t/p/w500${company.logo_path}`} />
            </ProductionInfo>
          )
        }
      })}
    </Container>
  );
}
 
export default MoviePageProduction;