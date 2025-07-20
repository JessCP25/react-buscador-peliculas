// import noResults from './mocks/no-results.json;'
import { useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovie } from "./hooks/useMovie";

function App() {
  const { movies } = useMovie()

  const inputRef = useRef();

  const handleSubmit = (event)=> {
    event.preventDefault();
    const inputEl = inputRef.current;
    const value = inputEl.value;

    console.log({value});
  }

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form onSubmit={handleSubmit}>
            <input name="query" ref={inputRef} placeholder="Avengers, Matrix, Harry Potter, ..." />
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
