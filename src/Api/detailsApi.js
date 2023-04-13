import axios from 'axios';

const details = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=e6e5040957b423292e46b69ab1c4061a`
  );

  return data;
};

export default details;
