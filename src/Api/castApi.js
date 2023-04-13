import axios from 'axios';

const CastList = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e6e5040957b423292e46b69ab1c4061a&language=en-US`
  );

  return data;
};

export default CastList;
