import axios from 'axios';

const API_KEY = '8ba4fca3e9edd0651b67f536e979ea96';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getMovies(paramsUrl, query) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${paramsUrl}?api_key=${API_KEY}&page=1&query=${query}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
