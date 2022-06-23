import styled from "styled-components";

export const Button = styled.button`
  background: #c1d9fb;
  color: #555;
  border: none;
  border-radius: 0;
  font-size: 1.5em;
  font-weight: 500;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Arial", serif;
  cursor: pointer;
  box-shadow: #ccc 3px 3px;

  &:hover {
    background-color: #d2deea;
  }

  &:focus {
    outline: none;
  }
`;
