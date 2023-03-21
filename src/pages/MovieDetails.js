import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { getOneMovie } from '../components/services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetals, setMovieDetals] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
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
  console.log(location);
  const { original_title, name } = movieDetals;
  return (
    <div>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <p>{original_title || name}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
