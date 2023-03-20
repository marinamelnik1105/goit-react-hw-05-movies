import { Link } from 'react-router-dom';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const MovieItem = ({ results }) => {
  return (
    <div>
      {results.results.map(({ id, title, poster_path, name }) => (
        <div key={id}>
          <Link key={id} to={`/movies/${id}`} id={id}>
            <img src={`${BASE_URL_IMG}${poster_path}`} alt="poster movie" />
            <p>{title || name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
