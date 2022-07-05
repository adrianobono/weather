import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "context/AppContext";
import services from "sevices/weatherServices/weatherServices";
import { IWeather } from "types/wheather";
import { Header } from "components/header";
import { WeatBody } from "components/weatbody";
import { Stack } from "components/stack/";
import { Temperature } from "components/temperature";
import Spinner from "components/spinner/Spinner";
import { Footer } from "components/footer";

const Wheather = (props: any) => {
  const [reset, setReset] = useState(true);
  const context = useContext(AppContext);
  const weather: IWeather = context ? context.weather : "";

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

  const changeReset = useCallback(() => {
    setReset(!reset);
  }, [reset]);

  return (
    context &&
    context.weather && (
      <Stack direction="col">
        <Header id={"header"} weather={context.weather} />
        <WeatBody>
          {context && context.loading && <Spinner />}
          {context && weather.main && (
            <Stack height={63}>
              <Stack direction="col">
                <Temperature context={context} />
              </Stack>
            </Stack>
          )}
        </WeatBody>
        <Footer
          id={"footer"}
          changeReset={changeReset}
          weather={context.weather}
        />
      </Stack>
    )
  );
};

export default Wheather;
