import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 70px;
`
const SearchBoxContent = styled.div`
  margin-top: 20px;
  input {
    padding: 1rem 2rem;
    border-radius: 25px;
    border: none;
    background-color: #ffe694;
    color: black;
  }
`


const SearchBar = ({handleQueryChange, handleSearchValueChange}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.currentTarget.value);
  }

  useEffect(() => {
    if(searchValue !== '') {
      handleQueryChange(`search/movie`)
      handleSearchValueChange(`query=${searchValue}`)
    } else {
      handleQueryChange(`movie/popular`)
      handleSearchValueChange('')
    }

  }, [searchValue])
  
  return (
    <SearchBox>
      <SearchBoxContent>
        <input
          type="text"
          placeholder="Search.."
          onChange={handleInputChange}
          value={searchValue}
        />
      </SearchBoxContent>
    </SearchBox>
  );
}
 
export default SearchBar;