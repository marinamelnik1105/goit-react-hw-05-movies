import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../services/api';
import { CastList, Img } from './Cast.styled';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [notEmpty, setNotEmpty] = useState(false);
  useEffect(() => {
    const cast = async id => {
      try {
        const castMovie = await getMovieCredits(id);
        setMovieCast(castMovie);
        setNotEmpty(true);
      } catch (error) {
        console.log(error);
      }
    };
    cast(movieId);
  }, [movieId]);
  const { cast } = movieCast;
  return (
    <div>
      <CastList>
        {notEmpty &&
          cast.map(({ id, name, profile_path }) => {
            return (
              <li key={id}>
                <Img
                  src={`${BASE_URL_IMG}${profile_path}`}
                  alt="actor portrait"
                />
                <p>{name}</p>
              </li>
            );
          })}
      </CastList>
    </div>
  );
};
export default Cast;
