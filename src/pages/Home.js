import * as api from '../components/services/api';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [results, setResults] = useState([]);
  const [notEmpty, setNotEmpty] = useState(false);

  useEffect(() => {
    const getMoviesTrends = async () => {
      try {
        const results = await api.getMoviesTrends();

        console.log({ results });
        setResults(results);
        setNotEmpty(true);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesTrends();
  }, [notEmpty]);

  return <div>{notEmpty && <MovieItem results={results} />}</div>;
};

export default Home;
