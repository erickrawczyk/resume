import styled from 'styled-components';

const MARGIN = 0.75;

export const List = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin: ${MARGIN}rem 0;

  &:before {
    content: '';
    counter-increment: steps;
    border: 1px solid #000;
    border-radius: 50%;
    display: inline-block;
    height: ${MARGIN}rem;
    width: ${MARGIN}rem;
    text-align: center;
    line-height: 1rem;
    background: #fff;
    margin-right: 0.5rem;
  }

  &:after {
    content: '';
    border: 0.5px solid black;
    display: block;
    width: 0px;
    height: 1rem;
    margin: -4px 0 calc(-${MARGIN}rem - 0.1rem) 6px;
  }

  &:last-of-type:after {
    border: none;
  }
`;
