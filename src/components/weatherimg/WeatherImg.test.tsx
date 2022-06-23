import { render, screen } from "@testing-library/react";
import { WeatherImg } from ".";

test("render element CityImg with margin right", () => {
  render(<WeatherImg />);

  const img = screen.getByRole("img");

  expect(img).toBeInTheDocument();
});
