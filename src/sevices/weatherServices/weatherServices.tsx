import { URL_API, URL_KEY } from "../../config";
import { Coord } from "../../@types/wheather";

function getWeather(coords: Coord) {
  return fetch(
    `${URL_API}lat=${coords.lat}&lon=${coords.lon}&APPID=${URL_KEY}`
  ).then(async (res) => {
    if (res) {
      const response = await res.json();
      return response;
    }
  });
}

const actions = {
  getWeather,
};

export default { actions };
