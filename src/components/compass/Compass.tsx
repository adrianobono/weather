import styled from "styled-components";
import compImg from "../../assets/images/compass.png";

export const Compass = styled.img`
  width: ${window.innerWidth > 992 ? 6 + "vw" : 10 + "vw"};
  margin-right: 10px;
`;

Compass.defaultProps = {
  src: compImg,
};
