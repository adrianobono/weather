import { render, screen } from "@testing-library/react";
import { CityImg } from "./";

test("render element CityImg with margin right", () => {
  render(<CityImg />);

  const img = screen.getByRole("img");

  expect(img).toBeInTheDocument();
  expect(img).toHaveStyle({ marginRight: `${10}px` });
});
