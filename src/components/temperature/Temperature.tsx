import { Stack } from "components/stack";
import { WeatherImg } from "components/weatherimg";
import styled from "styled-components";
const urlIcon: string = "http://openweathermap.org/img/wn/";

export const TempComp = styled.div`
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

export const Temperature = (props: any) => {
  const calcTemp = () => {
    return {
      celsius: (props.context.weather.main.temp_min - 273.15).toFixed(1),
      fahre: (props.context.weather.main.temp_min * 1.8 - 459.67).toFixed(1),
    };
  };

  return (
    props && (
      <TempComp>
        <Stack>
          <WeatherImg
            src={`${urlIcon}${props.context.weather.weather[0].icon}.png`}
            alt="Weather icon"
          />
          {!props.context.loading ? calcTemp().celsius : ""}
          °C / {!props.context.loading ? calcTemp().fahre : ""}
          °F
        </Stack>
      </TempComp>
    )
  );
};
