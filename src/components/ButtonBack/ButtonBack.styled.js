import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBackLink = styled(Link)`
  display: flex;
  height: 3em;
  width: 100px;
  align-items: center;
  justify-content: center;
  background-color: #7d7d7d;
  border-radius: 3px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  /* background: #fff; */
  margin-bottom: 33px;
  color: #ffffff;
  text-decoration: none;

  & > svg {
    fill: #ffffff;
    margin-right: 5px;
    margin-left: 5px;
    font-size: 20px;
    transition: all 0.4s ease-in;
  }

  &:hover > svg {
    font-size: 1.2em;
    transform: translateX(-5px);
  }

  &:hover {
    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
    transform: translateY(-2px);
  }
`;
