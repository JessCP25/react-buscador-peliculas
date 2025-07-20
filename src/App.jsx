import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovie } from "./hooks/useMovie";
import { useSearch } from "./hooks/useSearch";

function App() {
  const {search, setSearch, error} = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, getMovies } = useMovie({search, sort})

  const handleSubmit = (event) =>{
    event.preventDefault();
    getMovies({search})
  }

  const handleChange = (event)=> {
    setSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form onSubmit={handleSubmit}>
            <input style={{
              border: '1px solid transparent',
              borderColor: error ? 'red': 'transparent'
            }} onChange={handleChange} value={search} name="query" placeholder="Avengers, Matrix, Harry Potter, ..." />
            {movies.length > 0 &&  <label htmlFor="">Ordenar 
            <input type="checkbox" value={sort} onChange={handleSort} />
            </label>}
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}

export default App;
