import { LinkStyled } from 'components/MovieItem/MovieItem.styled';
import { useLocation } from 'react-router-dom';
import { Img, Item, List } from './MovieItem.styled';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const MovieItem = ({ results }) => {
  const location = useLocation();

  return (
    <List>
      {results.results.map(({ id, title, poster_path, name }) => (
        <Item key={id}>
          <LinkStyled
            key={id}
            to={`/movies/${id}`}
            state={{ from: location }}
            id={id}
          >
            <Img src={`${BASE_URL_IMG}${poster_path}`} alt="poster movie" />
            <p>{title || name}</p>
          </LinkStyled>
        </Item>
      ))}
    </List>
  );
};
