import { useContext, useEffect, useState } from "react";
import { AppContext } from "context/AppContext";
import services from "sevices/weatherServices/weatherServices";
import { IWeather } from "types/wheather";
import { Header } from "components/header";
import { WeatherImg } from "components/weatherimg";
import { GeoLocal } from "components/geoLocal/GeoLocal";
import { WeatBody } from "components/weatbody";
import { Stack } from "components/stack/";
import { Temperature } from "components/temperature";
import { Footer } from "components/footer";
import { Button } from "components/button";
import Spinner from "components/spinner/Spinner";
import { CompImgs } from "components/compimgs";

const Wheather = (props: any) => {
  const [reset, setReset] = useState(true);
  const context = useContext(AppContext);
  const weather: IWeather = context ? context.weather : "";
  const urlIcon: string = "http://openweathermap.org/img/wn/";

  useEffect(() => {
    context && context.setUpdate(true);
    context &&
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
  }, [context && context.coords, reset]);

  return (
    context &&
    context.weather && (
      <Stack direction="col">
        <Header id={"header"}>
          <CompImgs id={"clima"} />
          <Stack>
            <CompImgs id={"build"} />
            <h2>{weather && weather.name}</h2>
          </Stack>
          <Stack>
            <CompImgs id={"compass"} />
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
            <CompImgs id={"wind"} />
            {Number(weather.wind?.speed).toFixed(2)} m/s
          </Stack>
          <Stack>
            <CompImgs id={"umidade"} />
            {Number(weather.main?.humidity)} %
          </Stack>
          <Button role="button" onClick={() => setReset(!reset)}>
            Reload
          </Button>
        </Footer>
        <button>Reload</button>
      </Stack>
    )
  );
};

export default Wheather;
