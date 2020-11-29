import styled from "styled-components";

export const ItemList = styled.ul`
  background: #f4f2f2;
  width: 215px;
  display: block;
  position: absolute;
  left: 175px;
  top: -1px;
  border: 1px solid lightgrey;
  border-width: 1px 1px 0 0;
  text-decoration: none;
  list-style-type: none;
  border-radius: 20px;
`;

export const Item = styled.li`
  position: relative;
  border-bottom: 1px solid lightgrey;

  text-decoration: none;
  list-style-type: none;
  &:hover {
    background-color: #b19872;
  }
`;

export const ItemLabel = styled.span`
  position: relative;
  padding: 20px;
  width: 100%;
  display: block;
  text-decoration: none;
  &::after {
    position: absolute;
    content: "\\276F";
    right: 20px;
  }
`;

export const ItemAnchor = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
  text-decoration: none;
  color: black;
`;
