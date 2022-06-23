import useGeolocation from "react-hook-geolocation";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import { Stack } from "../stack";

export const GeoLocal = () => {
  const geolocation = useGeolocation();
  const context = useContext(AppContext);
  const { setCoordinates } = useContext(AppContext);

  useEffect(() => {
    geolocation.latitude &&
      setCoordinates({ lat: geolocation.latitude, lon: geolocation.longitude });
  }, [geolocation.latitude]);

  return !geolocation.error ? (
    context && context.coords && (
      <Stack>
        <Stack direction="col">
          <Stack>Lat: {context.coords.lat}</Stack>
          <Stack>Long: {context.coords.lon}</Stack>
        </Stack>
      </Stack>
    )
  ) : (
    <Stack>Your browser don't support Geolocation, sorry...</Stack>
  );
};
