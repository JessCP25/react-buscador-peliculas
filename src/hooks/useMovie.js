import { useCallback, useMemo, useRef, useState } from "react";
// import responseMovies from "../mocks/with-results.json";
import { searchMovies } from "../services/movie";

export const useMovie = ({search, sort}) => {
  const [movies, setMovies] = useState([]);
  const previousSearch = useRef(search)

  const getMovies = useCallback(async({search}) => {

    console.log('getMovies')
    if(search === previousSearch.current) return;
    
    try {
      previousSearch.current = search;
      const newMovies = await searchMovies({search});
      setMovies(newMovies);
    } catch (error) {
      console.log(error)
    }
  }, [])
  
  const sortedMovies = useMemo(()=>{
    console.log('sortedMovies')

    return sort ? [...movies].sort((a,b)=> a.title.localeCompare(b.title)) : movies
  }, [movies, sort])
  

  return {
    movies: sortedMovies, getMovies
  }
}
