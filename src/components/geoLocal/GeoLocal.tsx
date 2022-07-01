import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import { Stack } from "../stack";

export const GeoLocal = () => {
  const context = useContext(AppContext);
  const [gisData, setGisData] = useState(false);
  const { setCoordinates } = useContext(AppContext);

  !gisData &&
    navigator.geolocation &&
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setGisData(true);
    });

  return gisData ? (
    context && context.coords && (
      <Stack>
        <Stack direction="col">
          <Stack>Lat: {context.coords.lat}</Stack>
          <Stack>Long: {context.coords.lon}</Stack>
        </Stack>
      </Stack>
    )
  ) : (
    <Stack>There's no support to Geolocation, sorry...</Stack>
  );
};
