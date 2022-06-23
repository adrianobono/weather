import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

test("render element Logo with width style", () => {
  render(<Logo />);

  const img = screen.getByRole("img");

  expect(img).toBeInTheDocument();
  expect(img).toHaveStyle({ width: `6vw` });
});
