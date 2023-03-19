import * as api from '../components/services/apiHome';
import { useEffect, useState } from 'react';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
const paramsHomeUrl = 'trending/all/day';

const Home = () => {
  const [results, setResults] = useState([]);
  const [dataArr, setDataArr] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const results = await api.getMovies(paramsHomeUrl);

        console.log({ results });
        setResults(results);
        setDataArr(true);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies(paramsHomeUrl);
  }, []);

  return (
    <div>
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

export default Home;
