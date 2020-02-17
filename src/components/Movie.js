import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MovieContainer = styled.div`
  display: block;
  width: 100%;
  a {
    text-decoration: none;
    color: white;
  }
`
const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  div:first-child {
    display: flex;
    flex-direction: row;
    ${'' /* align-items: center; */}
    justify-content: space-between;
    p { margin: 0;}
  }
  p {
      margin: 5px 0;
    }
`
const ImageContainer = styled.div`
  display: block;
  width: 100%;
  img {
    width: 100%;
    border-radius: 25px;
  }
`
const MovieTitle = styled.h3`
  margin: 0;
`

const BlankImage = styled.div`
  display: block;
  width: 100%;
  height: 500px;
  background-color: white;
  border-radius: 25px;
`

const Movie = ({movie, genres, small}) => {

  const getGenres = (genres, movieIDs) => {
    return movieIDs.slice(0,2).map((id) => {
      for (const key in genres) {
        if(id === genres[key].id) {
          return genres[key].name;
        }
      }
    }).join(' | ');
  }

  const getYear = (date) => {
    return date.split('-')[0]
  }

  return (
    <MovieContainer>
      <Link to={`/movie/${movie.id}`}>
        {movie.poster_path ? 
          <ImageContainer><img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/></ImageContainer>
        :
          <BlankImage />
        }
        <MovieInfo>
          <div>
            <MovieTitle>{movie.original_title}!</MovieTitle>
            {!small && <p>{getYear(movie.release_date)}</p>}
          </div>
          
          <p>{getGenres(genres, movie.genre_ids)}</p>
          <p><span role="img" aria-label="star">⭐ </span>{movie.vote_average} ({movie.vote_count})</p>
        </MovieInfo>
      </Link>
    </MovieContainer>
  );
}
 
export default Movie;