// import noResults from './mocks/no-results.json;'
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovie } from "./hooks/useMovie";

function App() {
  const { movies } = useMovie()

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form>
            <input placeholder="Avengers, Matrix, Harry Potter, ..." />
            <button type="submit">Buscar</button>
          </form>
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}

export default App;
