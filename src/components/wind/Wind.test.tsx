import { render, screen } from "@testing-library/react";
import { Wind } from ".";

test("render element CityImg with margin right", () => {
  render(<Wind />);

  const img = screen.getByRole("img");

  expect(img).toBeInTheDocument();
});
