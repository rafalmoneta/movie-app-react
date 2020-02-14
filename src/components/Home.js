import React, { useState, useEffect, useReducer } from 'react';
import Movie from './Movie';
import Wrapper from './Wrapper';
import MoviesBox from './MoviesBox';
import Header from './Header';
import Nav from './Nav';
import Button from './Button';


function dataFetchReducer(state, action) {
  switch(action.type) {
    case "FETCH_START":
      return {...state, isLoading: true}
    case "FETCH_SUCCES":
      return {
        ...state,
        data: action.data,
        movies: action.movies,
        genres: action.genres,
        isLoading: false
      }
    case "FETCH_FAILED":
      return {
        ...state,
        isLoading: true,
        err: true
      }
    case "FETCH_ADD_PAGE":
      return {
        ...state,
        data: [...state.data, ...action.data],
        isLoading: false,
      }
    default:
      return {
        ...state,
        err: true
      }
  }
}

const Home = () => {
  // const [apiKey] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`);
  const [apiGenres] = useState(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`)
  const [state, dispatch] = useReducer(dataFetchReducer, {isLoading: true, data: null, genres: null, movies: [] ,err: false })
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState(`movie/popular`)
  const [endpoint, setEndpoint] = useState(`https://api.themoviedb.org/3/${query}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&page=${currentPage}`)
  
  useEffect(()=> {
    setEndpoint(`https://api.themoviedb.org/3/${query}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&page=${currentPage}`)
  }, [currentPage, query])

  useEffect(() => {
    setCurrentPage(1);
  },[query])

  useEffect(() => {
    const fetching = async (endpoint) => {
      dispatch({type: "FETCH_START"})
      try {
        const [res, genres] = await Promise.all([
          fetch(endpoint),
          fetch(apiGenres)
        ]);
        const resParsed = await res.json();
        const genresParsed = await genres.json();
        
        if(currentPage === 1) {
          dispatch({type: "FETCH_SUCCES", data: resParsed.results, genres: genresParsed, movies: resParsed.results})
        } else {
          dispatch({type: "FETCH_ADD_PAGE", data: resParsed.results})
        }
      }
  
      catch(err) {
        dispatch({type: "FETCH_FAILED"})
        console.error(err);
      }
    }
    fetching(endpoint);

  },[endpoint, apiGenres])

  return (
    <>
      <Header
        movie = {!state.isLoading && state.data[0]}
        isLoading = {state.isLoading}
        genres = {!state.isLoading && state.genres.genres}
      />
      <Wrapper>
        <Nav 
          handleQueryChange={setQuery}
        />
        {!state.isLoading && 
          <>
            <MoviesBox>
              {state.data.slice(1).map((movie, index) => {
                return (
                  <Movie
                    key={index}
                    movie={movie}
                    genres={state.genres.genres}
                  />
                )
              })} 
            </MoviesBox>
            <div style={{margin: '0 auto', width: 'fit-content'}}>
              <Button onClick={() => setCurrentPage(currentPage + 1)} name="Load more movies!"/>
              {/* <button onClick={() => setCurrentPage(currentPage + 1)}>Load more movies!</button> */}
            </div>
              
          </>
        }
      </Wrapper>
    </>
  );
}
 
export default Home;