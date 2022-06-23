import { render, screen } from "@testing-library/react";
import { Humidty } from "./";

test("render element Humidty with margin right", () => {
  render(<Humidty />);

  const img = screen.getByRole("img");

  expect(img).toBeInTheDocument();
  expect(img).toHaveStyle({ width: `5vw` });
});
