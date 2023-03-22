import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px;
`;
export const Item = styled.li`
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 4px 4px 9px 3px; ;
`;
export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  transition: color 0.5s ease;
  :hover,
  :focus {
    color: #7979ff;
  }
`;
export const Img = styled.img`
  object-fit: fill;
`;
