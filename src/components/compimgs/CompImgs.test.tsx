import { render, screen } from "@testing-library/react";
import { CompImgs } from ".";

test("render element CityImg with margin right", () => {
  render(<CompImgs />);

  const img = screen.getByRole("img");

  expect(img).toBeInTheDocument();
  expect(img).toHaveStyle({ width: `6vw` });
  expect(img).toHaveStyle({ marginRight: `${10}px` });
});
