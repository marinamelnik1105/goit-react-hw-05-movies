import { nanoid } from 'nanoid';
import { MovieItem } from 'components/MoviesList/MoviesList';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useEffect, useState } from 'react';
import * as api from '../components/services/api';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [notEmpty, setNotEmpty] = useState(false);
  const [reqId, setReqId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('value') ?? '';

  useEffect(() => {
    const getMovies = async query => {
      if (!query) return;

      try {
        const results = await api.getMovies(query);
        console.log(results);
        setResults(results);
        setNotEmpty(true);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies(search);
  }, [search, reqId]);

  const handleSubmit = ({ value }) => {
    setSearchParams({ value: value });
    setResults([]);
    setNotEmpty(false);
    setReqId(nanoid());
  };

  return (
    <div>
      <SearchMovies onSubmit={handleSubmit} />
      {notEmpty && <MovieItem results={results} />}
    </div>
  );
};

export default Movies;
