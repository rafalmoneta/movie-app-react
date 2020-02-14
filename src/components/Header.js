import React from 'react';
import styled from 'styled-components';

import MoviedbLogo from '../assets/moviedbicon.svg';

const HeaderContent = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background-color: #1F1B81;
  @media (max-width: 960px ) {
    height: auto;
    position: relative;
  }
  @media (max-width: 500px) {
    height: 800px;
  }
`

const YellowBox = styled.div`
  display: flex;
  height: 400px;
  background-color: #F7D052;
  padding: 2rem;
  justify-content: space-between;
  @media (max-width: 960px ) {
    height: 200px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
const Logo = styled.div`
  display: block;
  width: 200px;
`

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 70px;
`

const MovieContainer = styled.div`
  position: relative;
  top: -300px;
  display: block;
  width: 960px;
  margin: 0 auto;
  border-radius: 25px;
  @media (max-width: 960px ) {
    width: 100%;
    top: -50px;
  }
`

const MovieContent = styled.div`
  color: white;
  
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    border-radius: 25px;
    border: 7px solid white;
    box-sizing: border-box;
  }
  @media (max-width: 960px ) {
    img {
      border: none;
      border-radius: 0;
    }
  }

  
`

const MovieInfo = styled.div`
  display: flex;
  padding: 2rem;
  div:first-child {
    flex: 1;
  }
  h1, p {
    margin: 5px 0;
  }
  p:last-child {
    margin-top: 10px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    div:first-child {
      flex: 1;
      padding: 1rem;
    }
  }
  
`

const Desc = styled.p`
  display: block;
  flex: 3;
  margin-left: 1rem;
  padding: 0 1rem;
`

const Header = ({movie, isLoading, genres}) => {

  const getGenres = (genres, movieIDs) => {
    return movieIDs.slice(0,3).map((id) => {
      for (const key in genres) {
        if(id === genres[key].id) {
          return genres[key].name;
        }
      }
    }).join(' / ');
  }

  return (
    <HeaderContent>
      <YellowBox>
        <Logo>
          <img src={MoviedbLogo} alt="Moviedb logo" />
        </Logo>
        <SearchBar>There will be search bar</SearchBar>
      </YellowBox>
      {!isLoading && 
        <MovieContainer>
          <MovieContent>
            <img src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="movie poster"/>
            <MovieInfo>
              <div>
                <h1>{movie.original_title}</h1>
                <p>{getGenres(genres, movie.genre_ids)}</p>
                <p><span role="img" aria-label="star">⭐ </span>{movie.vote_average} ({movie.vote_count})</p>
              </div>
              <Desc>{movie.overview}</Desc>
            </MovieInfo>


          </MovieContent>
        </MovieContainer>
      }

    </HeaderContent>
  );
}
 
export default Header;