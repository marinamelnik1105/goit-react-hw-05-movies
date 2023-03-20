import { useEffect, useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { getOneMovie } from '../components/services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetals, setMovieDetals] = useState([]);

  useEffect(() => {
    const oneMovie = async id => {
      try {
        const oneMovieDet = await getOneMovie(id);
        setMovieDetals(oneMovieDet);
        console.log(oneMovieDet);
      } catch (error) {
        console.log(error);
      }
    };
    oneMovie(movieId);
  }, [movieId]);

  const { original_title, name } = movieDetals;
  return (
    <div>
      <p>{original_title || name}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
