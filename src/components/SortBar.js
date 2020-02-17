import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 2rem auto;
  h1 {
    margin: 1rem 0;
    font-size: 3rem;
  }
  @media (max-width: 960px ) {
    width: 100%;
  }

`

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 500px) {
    justify-content: space-between;
  }
`

const SortBar = ({handleQueryChange}) => {
  const [buttons] = useState([{name: 'Popular', query: 'movie/popular'}, {name: 'Upcoming', query: 'movie/upcoming'}, {name: 'Now playing', query: 'movie/now_playing'}, {name: 'Top rated', query: 'movie/top_rated'}]) 

  return (
    <SortContainer>
      <ButtonsBox>
        {buttons.map((button, index)=>{
          return(
            <Button
              key={index}
              onClick={() => handleQueryChange(button.query)}
              name={button.name}
            />
          )
        })}
      </ButtonsBox>
    </SortContainer>
  );
}
 
export default SortBar;