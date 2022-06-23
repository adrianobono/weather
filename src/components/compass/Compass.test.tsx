import { render, screen } from "@testing-library/react";
import { Compass } from "./";

test("render element Compass with margin right", () => {
  render(<Compass />);

  const img = screen.getByRole("img");

  expect(img).toBeInTheDocument();
  expect(img).toHaveStyle({ marginRight: `${10}px` });
});
