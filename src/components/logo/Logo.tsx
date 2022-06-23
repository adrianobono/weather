import styled from "styled-components";
import imgLogo from "../../assets/images/clima.png";

export const Logo = styled.img`
  width: ${window.innerWidth > 992 ? 6 + "vw" : 10 + "vw"};
`;

Logo.defaultProps = {
  src: imgLogo,
};
