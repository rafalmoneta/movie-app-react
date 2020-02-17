import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: 2px solid #FFF;
  background-color: #1F1B81;
  border-radius: 10px;
  padding: 1rem 3rem ;
  margin: 1rem;
  font-size: 1.25rem;
  color: #FFF;
  ${'' /* transition: background 0.2s ease-in-out;
  transition: color 0.3s ease-in-out; */}
  cursor: pointer;

  &:hover {
    background-color: #FFF;
    color: #000;
  }
 
  @media (max-width: 500px) {
    padding: 0.5rem 1rem;
    flex: 1 0 auto;
  }
`


const Button = ({name, onClick}) => {
  return (
    <ButtonStyled
      onClick={onClick}
    >
      {name}
    </ButtonStyled>
  );
}
 
export default Button;