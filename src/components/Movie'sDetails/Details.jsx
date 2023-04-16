import { details } from '../Api/searchMovieApi';
import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
const BASE_URL = 'http://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const location = useLocation();
  const locationBefore = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    details(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <Link to={locationBefore.current}>Go Back</Link>
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
