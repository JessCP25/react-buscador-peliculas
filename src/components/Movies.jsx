function ListMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoResults() {
  return <p>No se encontraron películas con las busqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0;
  return hasMovies ? <ListMovies movies={movies} /> : <NoResults />;
}
