import responseMovies from "../mocks/with-results.json";

export const useMovie = () => {
  const movies = responseMovies.Search;

  const mappingMovies = movies.map(movie => ({
    id: movie.imdbID,
    title:movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))


  return {
    movies: mappingMovies
  }
}
