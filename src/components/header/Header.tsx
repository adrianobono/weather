import styled from "styled-components";

export const Header = styled.header`
  height: 15vh;
  width: ${window.innerWidth > 992 ? 70 + "vw" : 95 + "vw"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(200, 200, 200);
  background: linear-gradient(
    90deg,
    rgba(200, 200, 200, 1) 0%,
    rgba(245, 245, 245, 1) 31%,
    rgba(245, 245, 245, 1) 63%,
    rgba(200, 200, 200, 1) 100%
  );
  box-sizing: border-box;
  padding: 15px;
  font-size: 0.7em;
  font-weight: 500;
  margin-top: 2vh;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #ccc;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  & h2 {
    font-size: 2em;
  }
`;
