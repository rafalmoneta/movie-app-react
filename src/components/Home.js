import React, { useState, useEffect, useReducer } from 'react';
import Movie from './Movie';
import Wrapper from './Wrapper';
import Header from './Header';
import Button from './Button';
import GridContainer from './GridContainer';
import SortBar from './SortBar';


function dataFetchReducer(state, action) {
  switch(action.type) {
    case "FETCH_START":
      return {...state, isLoading: true}
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.data,
        movies: action.movies,
        genres: action.genres,
        pages: action.pages,
        isLoading: false
      }
    case "FETCH_FAILED":
      return {
        ...state,
        isLoading: true,
        error: true
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
        error: true,
        isLoading: true
      }
  }
}

const Home = () => {
  // const [apiKey] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`);
  const [apiGenres] = useState(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`)
  const [query, setQuery] = useState(`movie/popular`);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [endpoint, setEndpoint] = useState(`https://api.themoviedb.org/3/${query}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&page=${currentPage}&${searchValue}`);
  const [state, dispatch] = useReducer(dataFetchReducer, {isLoading: true, data: null, genres: null, pages: null ,error: false })
  
  useEffect(()=> {
    setEndpoint(`https://api.themoviedb.org/3/${query}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&page=${currentPage}&${searchValue}`)
  }, [currentPage, query, searchValue])

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
          dispatch({type: "FETCH_SUCCESS", data: resParsed.results, genres: genresParsed, pages: resParsed.total_pages, movies: resParsed.results})
        } else {
          dispatch({type: "FETCH_ADD_PAGE", data: resParsed.results})
        }
      }
  
      catch(err) {
        dispatch({type: "FETCH_FAILED"})
        console.log("Mamy problem")
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
        home={true}
        setQuery={setQuery}
        setSearchValue={setSearchValue}
      />
        <Wrapper>
          {!state.isLoading && state.data.length !== 0 && 
            <SortBar 
              handleQueryChange={setQuery}
            />
          }
          {!state.isLoading && 
            <>
              <GridContainer>
                {state.data.slice(1).map((movie, index) => {
                  return (
                    <Movie
                      key={index}
                      movie={!state.isLoading && movie}
                      genres={state.genres.genres}
                    />
                  )
                })} 
              </GridContainer>
              {state.pages > currentPage && 
                <div style={{margin: '0 auto', width: 'fit-content'}}>
                  <Button onClick={() => setCurrentPage(currentPage + 1)} name="Load more movies!"/>
                </div>
              }
            </>
          }
        </Wrapper>
    </>
  );
}
 
export default Home;