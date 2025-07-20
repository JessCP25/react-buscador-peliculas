const API_KEY = '493a28bc'

export async function searchMovies({search}){
  if(search === '') return;

  try {
    const response = await fetch(`https://omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    const json = await response.json();

    const movies = json.Search;

    return movies.map(movie => ({
      id: movie.imdbID,
      title:movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}