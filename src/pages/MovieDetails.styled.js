import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const BackLink = styled(Link)`
  border: 1px solid black;
  border-radius: 5px;
  min-width: 20px;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #30305c;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #7979ff;
  }
`;

export const Container = styled.div`
  padding: 30px 15px;
`;
export const List = styled.ul`
  display: flex;
`;
export const Img = styled.img`
  width: 200px;
  margin: 21px 29px 14px 0px;
`;
export const MovieInfo = styled.div`
  display: flex;
`;
export const Genres = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkDetails = styled(Link)`
  padding: 5px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #7979ff;
  }
`;
