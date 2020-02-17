import React, { useState, useEffect, useReducer } from 'react';
import Wrapper from './Wrapper';
import Header from './Header';
import MoviePageInfo from './MoviePageInfo';
import MoviePageProduction from './MoviePageProduction';


function dataFetchReducer(state, action) {
  switch(action.type) {
    case "FETCH_START":
      return {...state, isLoading: true}
    case "FETCH_SUCCESS":
      return {
        ...state,
        movieData: action.movieData,
        creditsData: action.creditsData,
        isLoading: false
      }
    case "FETCH_FAILED":
      return {
        ...state,
        isLoading: true,
        err: true
      }
    default:
      return {
        ...state,
        err: true
      }
  }
}

const MoviePage = (props) => {

  const [movieApi] = useState(`https://api.themoviedb.org/3/movie/${props.match.params.movieID}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`); 
  const [movieCreditsApi] = useState(`https://api.themoviedb.org/3/movie/${props.match.params.movieID}/credits?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`)

  const [state, dispatch] = useReducer(dataFetchReducer, {isLoading: true, movieData: null, creditsData: null, err: false })

  useEffect(() => {
    const fetchMovieData = async () => {
      dispatch({type: "FETCH_START"})
      try {
        const [res1, res2] = await Promise.all([
          fetch(movieApi),
          fetch(movieCreditsApi)
        ]);
        const movieData = await res1.json();
        const creditsData = await res2.json();
        dispatch({type: "FETCH_SUCCESS", movieData: movieData, creditsData: creditsData})
      }

      catch(err) {
        dispatch({type: "FETCH_FAILED"})
        console.error(err);
      }
    }
    fetchMovieData();
  }, [movieApi, movieCreditsApi])

  return (
    <>
      <Header
        movie = {!state.isLoading && state.movieData}
        isLoading = {state.isLoading}
      />
      <Wrapper>
        {!state.isLoading && <span style={{display: 'block', textAlign: 'center', fontStyle: 'italic', fontSize: '2rem', margin: '0 0 4rem 0'}}>{state.movieData.tagline}</span>}
        <h1>Cast members:</h1>
        {!state.isLoading && 
          <MoviePageInfo 
            cast = {state.creditsData.cast}
            crew = {state.creditsData.crew}
          />
        }
        <h1>Production companies</h1>
        {!state.isLoading && 
          <MoviePageProduction production={!state.isLoading && state.movieData.production_companies}/>
        }
      </Wrapper>
    </>
  );
}

export default MoviePage;