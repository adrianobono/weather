import { rest } from "msw";
import { setupServer } from "msw/node";
import services from "./weatherServices";
import { URL_API, URL_KEY } from "../../config/index";

const response = { test: "testing" };

const server = setupServer(
  rest.get(
    `${URL_API}lat=${41}&lon=${-21}&APPID=${URL_KEY}`,
    (req, res, ctx) => {
      return res(ctx.json(response));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("convert json response into object", async () => {
  const weather = await services.actions.getWeather({ lon: 41, lat: 21 });
  expect(weather).toStrictEqual(response);
});
