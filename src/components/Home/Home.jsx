import { trendList } from 'Api/trendApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    trendList().then(({ data: { results } }) => setMovies(results));
  }, []);

  return (
    movies && (
      <ul>
        {movies.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Home;
