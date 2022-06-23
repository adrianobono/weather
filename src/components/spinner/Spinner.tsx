import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  color: black;
  transform: translateZ(0);
  position: absolute;
  border-top: 4px solid blue;
  border-right: 4px solid green;
  border-bottom: 4px solid green;
  border-left: 4px solid black;
  width: ${window.innerWidth > 992 ? 25 + "vw" : 60 + "vw"};
  height: ${window.innerWidth > 992 ? 25 + "vw" : 60 + "vw"};
  border-radius: 50%;
  z-index: 2;
`;

export default Spinner;
