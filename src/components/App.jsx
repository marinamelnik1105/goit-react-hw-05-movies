import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import NotFound from "pages/NotFound";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Rewiews";


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () =>
{
 
  
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
   
      </nav>
<div>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
             <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </div>
    
  );
};
