import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
    </nav>
    <div>
      <Outlet />
    </div>
  </div>;
};
export default SharedLayout;
