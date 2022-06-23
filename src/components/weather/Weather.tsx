import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import services from "../../sevices/weatherServices/weatherServices";
import { IWeather } from "../../@types/wheather";
import { Header } from "../header";
import { GeoLocal } from "../geoLocal/GeoLocal";
import { Logo } from "../logo";
import { Button } from "../button";
import { Temperature } from "../temperature";
import { Stack } from "../stack";
import { Compass } from "../compass";
import { CityImg } from "../cityimg";
import { WeatherImg } from "../weatherimg";
import { Footer } from "../footer";
import { Wind } from "../wind";
import { Humidty } from "../humidity";
import { WeatBody } from "../weatbody";
import Spinner from "../spinner/Spinner";

const Wheather = () => {
  const [reset, setReset] = useState(true);
  const context = useContext(AppContext);
  const weather: IWeather = context.weather;
  const urlIcon: string = "http://openweathermap.org/img/wn/";

  useEffect(() => {
    context.setUpdate(true);
    context.coords.lon &&
      services.actions
        .getWeather(context.coords)
        .then(async (response: IWeather) => {
          setTimeout(() => {
            context.onWeather(response);
            context.setUpdate(false);
          }, 2000);
        });

    return;
  }, [context.coords, reset]);

  return (
    <Stack direction="col">
      <Header id="header">
        <Logo />
        <Stack>
          <CityImg />
          <h2>{weather && weather.name}</h2>
        </Stack>
        <Stack>
          <Compass />
          <GeoLocal />
        </Stack>
      </Header>
      <WeatBody>
        {context && context.loading && <Spinner />}
        {context && weather.main && (
          <Stack height={63}>
            <Stack direction="col">
              <Temperature>
                <Stack>
                  <WeatherImg
                    src={`${urlIcon}${weather.weather[0].icon}.png`}
                    alt="Weather icon"
                  />
                  {!context.loading
                    ? (Number(weather.main.temp_min) - 273.15).toFixed(1)
                    : ""}
                  °C
                </Stack>
              </Temperature>
            </Stack>
          </Stack>
        )}
      </WeatBody>
      <Footer id="footer">
        <Stack>
          <Wind />
          {Number(weather.wind?.speed).toFixed(2)} m/s
        </Stack>
        <Stack>
          <Humidty />
          {Number(weather.main?.humidity)} %
        </Stack>
        <Button onClick={() => setReset(!reset)}>Reload</Button>
      </Footer>
    </Stack>
  );
};

export default Wheather;
