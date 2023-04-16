import axios from 'axios';

export const searchMovie = async searchValue => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=e6e5040957b423292e46b69ab1c4061a&language=en-US&query=${searchValue}&page=1&include_adult=false`
  );

  return data.results;
};

// export default searchMovie;

// import axios from 'axios';

export const CastList = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e6e5040957b423292e46b69ab1c4061a&language=en-US`
  );

  return data;
};

export const details = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=e6e5040957b423292e46b69ab1c4061a`
  );

  return data;
};

export const reviews = async movieId => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=e6e5040957b423292e46b69ab1c4061a&language=en-US&page=1`
  );

  return results;
};

export const trendList = () => {
  const res = axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=e6e5040957b423292e46b69ab1c4061a'
  );
  return res;
};
