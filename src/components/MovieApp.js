import React, { useState, useEffect, useReducer } from 'react';
import Header from './Header';
import Movie from './Movie';
import Wrapper from './Wrapper';
import MoviesBox from './MoviesBox';


function dataFetchReducer(state, action) {
  switch(action.type) {
    case "FETCH_START":
      return {...state, isLoading: true}
    case "FETCH_SUCCES":
      return {
        ...state,
        data: action.data,
        genres: action.genres,
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

const MovieApp = () => {
  const [apiKey] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`);
  const [apiGenres] = useState(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`)
  const [state, dispatch] = useReducer(dataFetchReducer, {isLoading: true, data: null, genres: null, err: false })

  useEffect(() => {
    const fetching = async () => {
      dispatch({type: "FETCH_START"})
      try {
        const [res, genres] = await Promise.all([
          fetch(apiKey),
          fetch(apiGenres)
        ]);
        const resParsed = await res.json();
        const genresParsed = await genres.json();
        dispatch({type: "FETCH_SUCCES", data: resParsed, genres: genresParsed})
      }
  
      catch(err) {
        dispatch({type: "FETCH_FAILED"})
        console.error(err);
      }
    }
    fetching();

  },[apiKey, apiGenres])

  if(!state.isLoading) {
    console.log(state.data.results.slice(0,4));
    // console.log(state.genres.genres);
  }

  return (
    <Wrapper>
      <Header />
      {!state.isLoading && 
        <MoviesBox>
          {state.data.results.slice(0,4).map((movie, index) => {
            return (
              <Movie
                key={index}
                movie={movie}
                genres={state.genres.genres}
              />
            )
          })} 
        </MoviesBox>
      }
    </Wrapper>
  );
}
 
export default MovieApp;