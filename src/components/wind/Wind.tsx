import styled from "styled-components";
import windimg from "../../assets/images/wind.png";

export const Wind = styled.img`
  width: ${window.innerWidth > 992 ? 7 + "vw" : 15 + "vw"};
`;

Wind.defaultProps = {
  src: windimg,
};
