import styled from "styled-components";

export const WeatBody = styled.div`
  height: 70vh;
  width: ${window.innerWidth > 992 ? 70 + "vw" : 95 + "vw"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 3px solid #ccc;
  box-sizing: border-box;
  padding: 15px;
  font-size: ${window.innerWidth > 992 ? 1.2 + "em" : 0.7 + "em"};
  font-weight: 500;
  margin-top: 2vh;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #ccc;
  position: relative;
  margin-top: -2vh;
  z-index: -1;
`;
