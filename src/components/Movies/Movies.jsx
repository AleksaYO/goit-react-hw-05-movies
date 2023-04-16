import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovie } from '../Api/searchMovieApi';

const Movies = () => {
  const [searchValue, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  function onFormSubmit(e) {
    const { value } = e.target.elements.movie;
    e.preventDefault();
    setValue(value);
  }

  useEffect(() => {
    if (!searchValue) return;
    const a = async () => {
      const res = await searchMovie(searchValue);
      setMovies(res);
      localStorage.setItem('movies', JSON.stringify(movies));
    };
    a();
  }, [searchValue, movies]);

  useEffect(() => {
    const localMovies = localStorage.getItem('movies');
    const parcedMovies = JSON.parse(localMovies);
    setMovies(parcedMovies);
  }, []);

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          name="movie"
          type="text"
          placeholder="Search movie
    "
        />
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(item => {
            return (
              <li key={item.id}>
                <Link
                  state={{ from: `/movies` }}
                  to={`/movies/${item.id}`}
                  key={item.id}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
