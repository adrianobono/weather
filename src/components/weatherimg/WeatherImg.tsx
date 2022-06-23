import styled from "styled-components";

interface IIcon {
  src?: string;
  alt?: string;
}

export const WeatherImg = styled.img<IIcon>`
  width: ${window.innerWidth > 992 ? 7 + "vw" : 20 + "vw"};
  opacity: 0.8;
`;
