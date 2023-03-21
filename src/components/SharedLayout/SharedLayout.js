import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
