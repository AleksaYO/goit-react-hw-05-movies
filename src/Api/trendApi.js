import axios from 'axios';
export const trendList = () => {
  const res = axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=e6e5040957b423292e46b69ab1c4061a'
  );
  return res;
};
