import styled from "styled-components";
import cityImg from "../../assets/images/build.png";

export const CityImg = styled.img`
  width: ${window.innerWidth > 992 ? 6 + "vw" : 10 + "vw"};
  margin-right: 10px;
`;

CityImg.defaultProps = {
  src: cityImg,
};
