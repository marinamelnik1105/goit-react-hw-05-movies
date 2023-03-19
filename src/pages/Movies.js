import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useEffect, useState } from 'react';
import * as api from '../components/services/apiHome';
const paramsMovieUrl = 'search/movie';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [dataArr, setDataArr] = useState(false);
  useEffect(() => {
    const getMovies = async (paramsMovieUrl, query) => {
      if (!query) return;

      try {
        const results = await api.getMovies(paramsMovieUrl, query);
        console.log(results);
        setResults(results);
        setDataArr(true);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies(paramsMovieUrl, search);
  }, [search]);

  const handleSubmit = ({ value }) => {
    setSearch(value);
    setResults([]);
  };

  return (
    <div>
      <SearchMovies onSubmit={handleSubmit} />
      {dataArr && (
        <div>
          {results.results.map(({ id, original_title, poster_path, name }) => (
            <div key={id}>
              <img src={`${BASE_URL_IMG}${poster_path}`} alt="img" />
              <p>{original_title || name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
