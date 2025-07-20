import responseMovies from './mocks/with-results.json';
// import noResults from './mocks/no-results.json;'
import './App.css'

function App() {

  const movies =responseMovies.Search;

  const hasMovies = movies.length > 0

  return (
    <>
      <div className='page'>
        <header>
        <h1>Buscador de películas</h1>
        <form>
          <input placeholder='Avengers, Matrix, Harry Potter, ...' />
          <button type='submit'>Buscar</button>
        </form>
        </header>
        <main>
            {
              hasMovies ? (
                <ul>  
                  {
                    movies.map(movie => <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>)
                  }
          </ul>
              )
              : (
                <p>No se encontraron películas con las busqueda</p>
              )
            }
        </main>
      </div>
    </>
  )
}

export default App
