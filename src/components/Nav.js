import React, { useState } from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: red;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
`

const Btn = styled.button`
  border: none;
  background-color: yellow;
  border-radius: 25px;
  padding: 0.5rem 2rem;
`

const categoriesArr = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 53,
    "name": "Thriller"
  }
] 

const Nav = () => {
  const [categories, setCategories] = useState(categoriesArr)
  

  return (
    <Navigation>
      <h1>Now showing (4)</h1>
      <p>Lastest movies that you can see in cinema</p>
      <ButtonsBox>
        {categories.map((category, index) => {
          return (
            <Btn
              key={index}
            >
              {category.name}
            </Btn>
          )

        })}
      </ButtonsBox>
      
    </Navigation>
  );
}
 
export default Nav;