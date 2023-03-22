import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #30305c;

  box-shadow: 0px 6px 20px #30305c;
`;

export const List = styled.ul`
  margin: 0;
  display: flex;
  padding: 20px;
  max-width: 300px;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
  font-size: 30px;
`;
export const LinkStyled = styled(Link)`
  color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #7979ff;
  }
`;
