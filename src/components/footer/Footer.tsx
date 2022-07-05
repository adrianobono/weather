import styled from "styled-components";
import { Stack } from "components/stack";
import { CompImgs } from "components/compimgs";
import { Button } from "components/button";

const FooterComp = styled.footer`
  height: 15vh;
  width: ${window.innerWidth > 992 ? 70 + "vw" : 95 + "vw"};
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgb(200, 200, 200);
  background: linear-gradient(
    90deg,
    rgba(200, 200, 200, 1) 0%,
    rgba(245, 245, 245, 1) 31%,
    rgba(245, 245, 245, 1) 63%,
    rgba(200, 200, 200, 1) 100%
  );
  box-sizing: border-box;
  padding: 15px;
  font-size: ${window.innerWidth > 992 ? 1.2 + "em" : 0.7 + "em"};
  font-weight: 500;
  margin-top: 2vh;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #ccc;
  position: absolute;
  bottom: 2vh;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const Footer = (props: any) => {
  const handleClick = () => {
    props.changeReset();
  };
  return (
    props && (
      <FooterComp>
        <Stack>
          <CompImgs id={"wind"} />
          {Number(props.weather.wind?.speed).toFixed(2)} m/s
        </Stack>
        <Stack>
          <CompImgs id={"umidade"} />
          {Number(props.weather.main?.humidity)} %
        </Stack>
        <Button
          role="button"
          onClick={() => {
            handleClick();
          }}
        >
          Reload
        </Button>
      </FooterComp>
    )
  );
};
