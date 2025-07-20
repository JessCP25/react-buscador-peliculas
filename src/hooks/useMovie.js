import { useRef, useState } from "react";
// import responseMovies from "../mocks/with-results.json";
import { searchMovies } from "../services/movie";

export const useMovie = ({search}) => {
  const [movies, setMovies] = useState([]);
  const previousSearch = useRef(search)

  const getMovies = async() => {

    if(search === previousSearch.current) return;

    try {
      previousSearch.current = search;
      const newMovies = await searchMovies({search});
      setMovies(newMovies);
    } catch (error) {
      console.log(error)
    }
  }


  return {
    movies, getMovies
  }
}
