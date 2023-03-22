import { FallingLines } from 'react-loader-spinner';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getOneMovie } from '../components/services/api';
import {
  BackLink,
  Container,
  Genres,
  Img,
  LinkDetails,
  List,
  MovieInfo,
} from './MovieDetails.styled';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

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
  const { title, name, poster_path, genres, overview, vote_average } =
    movieDetals;
  return (
    <Container>
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      <MovieInfo>
        <Img src={`${BASE_URL_IMG}${poster_path}`} alt="poster movie" />
        <div>
          <h2>{title || name}</h2>
          <p>Rating:{vote_average} </p>
          <Genres>
            <p>Genres:</p>
            <List>
              {genres &&
                genres.map(({ id, name }, index) => (
                  <li key={id}>
                    {`${name}${index !== genres.length - 1 ? ', ' : ''}`}
                  </li>
                ))}
            </List>
          </Genres>
          <p>
            <span>Overview: </span>
            {overview}
          </p>
        </div>
      </MovieInfo>

      <List>
        <li>
          <LinkDetails to="cast">Cast </LinkDetails>
        </li>
        <li>
          <LinkDetails to="reviews">Reviews </LinkDetails>
        </li>
      </List>
      <Suspense
        fallback={
          <div>
            <FallingLines
              color="#7979ff"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
