import styled from "styled-components";

export const Footer = styled.footer`
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
  font-size: ${window.innerWidth > 992 ? 1.2 + "em" : 0.7 + "em"};
  font-weight: 500;
  margin-top: 2vh;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #ccc;
  position: absolute;
  bottom: 2vh;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;
