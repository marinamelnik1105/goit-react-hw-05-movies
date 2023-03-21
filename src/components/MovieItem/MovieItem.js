import { Link, useLocation } from 'react-router-dom';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const MovieItem = ({ results }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {results.results.map(({ id, title, poster_path, name }) => (
        <div key={id}>
          <Link
            key={id}
            to={`/movies/${id}`}
            state={{ from: location }}
            id={id}
          >
            <img src={`${BASE_URL_IMG}${poster_path}`} alt="poster movie" />
            <p>{title || name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
