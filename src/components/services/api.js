import axios from 'axios';

const API_KEY = '8ba4fca3e9edd0651b67f536e979ea96';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getMoviesTrends() {
  try {
    const { data } = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=1`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovies(query) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&page=1&query=${query}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getOneMovie(movieId) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCredits(movieId) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getMovieReviews(movieId) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
