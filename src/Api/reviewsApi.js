import axios from 'axios';

const reviews = async movieId => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=e6e5040957b423292e46b69ab1c4061a&language=en-US&page=1`
  );

  return results;
};

export default reviews;
