import { FallingLines } from 'react-loader-spinner';
import { GlobalStyle } from 'components/GlobalStyle.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, LinkStyled, List } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <nav>
          <List>
            <li>
              <LinkStyled to="/">Home </LinkStyled>
            </li>
            <li>
              <LinkStyled to="/movies">Movies</LinkStyled>
            </li>
          </List>
        </nav>
      </Header>
      <main>
        <Suspense
          fallback={
            <div>
              {' '}
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
      </main>
    </>
  );
};
export default SharedLayout;
