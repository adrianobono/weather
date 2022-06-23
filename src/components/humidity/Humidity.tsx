import styled from "styled-components";
import humid from "../../assets/images/umidade.png";

export const Humidty = styled.img`
  width: ${window.innerWidth > 992 ? 5 + "vw" : 15 + "vw"};
`;

Humidty.defaultProps = {
  src: humid,
};
