import styled from "styled-components";

export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${window.innerWidth > 992 ? 25 + "vw" : 60 + "vw"};
  height: ${window.innerWidth > 992 ? 25 + "vw" : 60 + "vw"};
  border: 4px solid #aaa;
  border-radius: 50%;
  font-size: ${window.innerWidth > 992 ? 4 + "em" : 2.2 + "em"};
  color: #fff;
  font-weight: 700;
  background-image: radial-gradient(rgba(255, 255, 0, 0.2), green, black);
  background-size: 3px;
  z-index: -1;
`;
