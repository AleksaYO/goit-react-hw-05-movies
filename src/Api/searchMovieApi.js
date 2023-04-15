import axios from 'axios';

const searchMovie = async searchValue => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=e6e5040957b423292e46b69ab1c4061a&language=en-US&query=${searchValue}&page=1&include_adult=false`
  );

  return data.results;
};

export default searchMovie;
