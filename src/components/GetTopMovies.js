import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '3112e89bf157faad4318ba0233c4e40b',
};

export const getTopMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`);
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};

export const getMoviesByName = async query => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data;
};
