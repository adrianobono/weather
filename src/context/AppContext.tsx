import React from "react";
import { Weather, Coord } from "../@types/wheather";

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<any | null>(null);

const AppProvider: React.FC<Props> = ({ children }) => {
  const [coords, setCoords] = React.useState({});
  const [weather, setWeather] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  window.addEventListener("resize", onResize);

  function onResize() {
    if (window.innerWidth < 992) {
      document.location.reload();
      return;
    }
  }

  const onWeather = (values: Weather) => {
    setWeather(values);
  };

  const setCoordinates = (values: Coord) => {
    setCoords(values);
  };

  const setUpdate = (value: boolean) => {
    setLoading(value);
  };

  return (
    <AppContext.Provider
      value={{ setCoordinates, coords, onWeather, weather, setUpdate, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
