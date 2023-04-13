import details from 'Api/detailsApi';
import { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
const BASE_URL = 'http://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    details(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <Link to="/">Go Back</Link>
      {movie.poster_path && (
        <div>
          <img src={BASE_URL + movie.poster_path} alt="" />
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <h3>Overview: {movie.overview}</h3>
          <h4>Genres: {movie.genres.map(item => item.name).join(', ')}</h4>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
