import "./App.css";
import { Movies } from "./components/Movies";
import { useMovie } from "./hooks/useMovie";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { movies } = useMovie()
  const {search, setSearch, error} = useSearch();

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log({search});
  }

  const handleChange = (event)=> {
    setSearch(event.target.value)
  }

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} name="query" placeholder="Avengers, Matrix, Harry Potter, ..." />
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
