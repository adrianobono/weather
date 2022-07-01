import styled, { withTheme } from "styled-components";

export const CompImgs = styled.img.attrs((props) => ({
  src: "./assets/images/" + props.id + ".png",
}))`
  width: ${window.innerWidth > 992 ? 6 + "vw" : 10 + "vw"};
  margin-right: 10px;
`;
